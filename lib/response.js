var http = require('http');

var _writeHead = http.ServerResponse.prototype.writeHead;
var _end = http.ServerResponse.prototype.end;

http.ServerResponse.prototype.setHeader = function (key, value) {
    this._additionalHeaders = this._additionalHeaders || {}; 
    this._additionalHeaders[key] = value;
    return this;
};

http.ServerResponse.prototype.setHeaders = function (headers) {
    for (var key in headers) {
        var value = headers[key];
        this._additionalHeaders = this._additionalHeaders || {}; 
        this._additionalHeaders[key] = value;
    }
    return this;
};

http.ServerResponse.prototype.type = function (t) {
    return this.setHeader('Content-Type', t);
};

http.ServerResponse.prototype.end = function (msg) {
    if (!this._calledWriteHead) {
        this.writeHead(200, {});
    }
    _end.call(this, msg);
    return this;
};

http.ServerResponse.prototype.writeHead = function (status, headers) {
    var that = this;
    if (this._additionalHeaders) {
        Object.keys(this._additionalHeaders).forEach(function (k) {
            headers[k] = headers[k] || that._additionalHeaders[k];
        }); 
        delete this._additionalHeaders;
    }
    this._calledWriteHead = true;
    _writeHead.call(this, status, headers);
    return this;
};
