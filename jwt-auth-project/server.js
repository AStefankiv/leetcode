const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

const users = [];

const SECRET_KEY = 'secretkey';

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  if (users.find((user) => user.username === username)) {
    return res.status(400).send('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({ username, password: hashedPassword });

  res.status(201).json({ message: 'User registered successfully' });
});


app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(400).send('Invalid username or password');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).send('Invalid username or password');
  }

  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });

  res.status(200).json({ token });
});

app.get('protected', (req, res) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    res.json({ message: `Hello, ${decoded.username}! You have access.` });
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
});