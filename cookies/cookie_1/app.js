const express = require('express');
const cookieSession = require('cookie-session');

const app = express();

const sessionMaxAge = 1 * 60 * 60 * 1000; // 1 hour

app.use(cookieSession({
  name: 'session',
  keys: ['secretKey1', 'secretKey2'],
  maxAge: sessionMaxAge,
}));

app.use((req, res, next) => {
  if (!req.session.lastAccess) {
    req.session.createdAt = Date.now();
  }
  req.session.lastAccess = Date.now();
  next();
});

app.get('/', (req, res) => {
  req.session.views = (req.session.views || 0) + 1;
  res.send(`You have visited this page ${req.session.views} times`);
});

app.get('/reset', (req, res) => {
  req.session = null;
  res.send('Session has been reset');
});

app.get('/expiry', (req, res) => {
  const expiryTime = req.session.createdAt + sessionMaxAge - Date.now();
  const expiryTimeInSeconds = Math.max(Math.floor(expiryTime / 1000), 0);
  const expiryTimeInMinutes = Math.max(Math.floor(expiryTimeInSeconds / 60), 0);
  res.send(`Session will expire in ${expiryTimeInSeconds} seconds or ${expiryTimeInMinutes} minutes`);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});