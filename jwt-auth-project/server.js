const express = require('express');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());


app.use('/', authRoutes);
app.use('/', protectedRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});