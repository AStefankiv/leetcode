const express = require('express');
const cookieSession = require('cookie-session');

const app = express();

app.use(cookieSession({
  name: 'session',
  keys: ['secretKey1', 'secretKey2'],
  maxAge: 1 * 60 * 60 * 1000 // 1 hour
}));

app.get('/', (req, res) => {
  req.session.views = (req.session.views || 0) + 1;
  res.send(`You have visited this page ${req.session.views} times`);
});

app.get('/reset', (req, res) => {
  req.session = null;
  res.send('Session has been reset');
});

app.get('/expiry', (req, res) => {
  const expiryTime = req.sessionOptions.maxAge - (Date.now() - req.session.lastAccess);
  const secondsLeft = Math.max(Math.floor(expiryTime / 1000), 0);
  res.send(`Your session expires in ${secondsLeft} seconds`);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});