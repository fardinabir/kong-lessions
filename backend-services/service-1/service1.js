const http = require('http');
http.createServer((req, res) => {
  res.end('Response from Server 1');
}).listen(3001, () => console.log('Server 1 running on port 3001'));
