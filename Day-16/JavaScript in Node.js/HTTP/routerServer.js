// http_examples/routerServer.js
const http = require('http');
const url = require('url');

function route(req, res) {
  const { pathname } = url.parse(req.url, true);

  if (pathname === '/'){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('<h1>Home</h1><p>Welcome</p>');
    return;
  }

  if (pathname === '/api/now'){
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify({ now: new Date().toISOString() }));
    return;
  }

  res.writeHead(404, {'Content-Type':'text/plain'});
  res.end('Not found');
}

const server = http.createServer(route);
server.listen(3001, () => console.log('Router server on http://localhost:3001'));


// Test with:
// curl http://localhost:3001/
// curl http://localhost:3001/api/now
// curl http://localhost:3001/unknown
// node routerServer.js