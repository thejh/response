var http = require('http');
require('response');

http.createServer(function (req, res) {
    var content = 'hello, i know nodejitsu.';
    res
        .type('text/plain')
        .setHeaders({
            'Content-Length' : content.length,
            'Foo-Bar' : 'A',
            'Foo-Tar' : 'B',
        })
        .end(content)
    ;
}).listen(8080);
