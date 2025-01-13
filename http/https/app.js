const https = require('https');
const express = require('express');
const app = express();

const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/mssg', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};

https.createServer(options, app).listen(3000, (req, res) => {
  console.log('Server is running on port 3000');
});