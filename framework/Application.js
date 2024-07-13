const http = require('http');
const EventEmmitter = require('events');

module.exports = class Application {
    constructor() {
        this.emitter = new EventEmmitter();
        this.server = this._createServer();
    }

    _createServer() {
        return http.createServer((req, res) => {
            const emitted = this.emitter.emit(`[${req.url}]:[${req.method}]`, req, res);
            
            if (!emitted) {
                res.statusCode = 404;
                res.end('Not Found');
            }
        });
    }
}