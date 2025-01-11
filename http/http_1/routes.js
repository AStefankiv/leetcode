const http = require('http');

const port = 8000;
const host = 'localhost';

const requestListener = function (req, res) {};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});