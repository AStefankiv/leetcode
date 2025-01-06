const express = require('express');
const basicAuth = require('express-basic-auth');
const path = require('path');

const app = express();
const PORT = 3000;

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(basicAuth({
  users: {
      'admin': 'supersecret',
      'adam': 'password1234',
      'eve': 'asdfghjkl',
  },
  challenge: true
}))

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});