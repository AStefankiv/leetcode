const http = require('http');

const port = 8000;
const host = 'localhost';

const requestListener = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.writeHead(200);
  res.end(JSON.stringify({ message: 'This is a JSON response' }));
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});