var http     = require('http'),
    response = require('./lib/response');


http.createServer(function (req, res) {
  var content = 'hello, i know nodejs.';

  res.setHeader('Content-Length', content.length);
  res.setHeader('Foo-Bar', 'A');
  res.setHeader('Foo-Tar', 'B');

  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Foo-Tar': 'C'
  });
  
  res.write(content);
  res.end();
}).listen(8080);