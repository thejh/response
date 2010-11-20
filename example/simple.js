var http = require('http');
require('response');

http.createServer(function (req, res) {
  res
    .type('text/plain')
    .setHeaders({
      'Content-Length' : content.length,
      'Foo-Bar' : 'A',
      'Foo-Tar' : 'B',
    })
    .end('hello, i know nodejitsu.')
  ;
}).listen(8080);
