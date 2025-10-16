// http_examples/simpleServer.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end('Hello from plain Node HTTP server\n');
});

server.listen(3000, () => console.log('Server listening on http://localhost:3000'));
