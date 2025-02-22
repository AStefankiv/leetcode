const http = require('http');

const port = 8000;
const host = 'localhost';

const requestListener = function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);
  res.end(`<html><body><h1>This is HTML</h1></body></html>`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});