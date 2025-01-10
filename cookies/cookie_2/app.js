const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser('secret'));

app.get('/set-cookie', (req, res) => {
  res.cookie('user', 'Veronika');
  res.send('Regular cookie set!');
});

// app.get('/set-signed-cookie', (req, res) => {
//     res.cookie('sessionId', '12345', { signed: true, maxAge: 3600000, httpOnly: true });
//   res.send('Signed cookie is set!');
// });


app.get('/set-signed-cookie', (req, res) => {
    res.cookie('user', 'Veronika', { signed: true, maxAge: 3600000, httpOnly: true });
  res.send('Signed cookie is set!');
});

app.get('/', (req, res) => {
  console.log('Cookies: ', Object.assign({}, req.cookies));
  console.log('Cookies user: ', req.cookies.user);
  console.log('Signed Cookies: ', Object.assign({}, req.signedCookies));
  console.log('Signed Cookies user: ', req.signedCookies.user);

  const rawCookies = req.headers.cookie.split('; ');
  console.log('Raw Cookies: ', rawCookies);

  res.send('Check the console for cookies');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});