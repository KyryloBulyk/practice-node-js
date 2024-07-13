const http = require('http');
const EventEmmitter = require('events');

module.exports = class Application {
    constructor() {
        this.emitter = new EventEmmitter();
        this.server = this._createServer();
    }

    addRouter(router) {
        
    }

    _createServer() {
        return http.createServer((req, res) => {
            const emitted = this.emitter.emit(this._getRouteMask(req.utl, req.method), req, res);
            
            if (!emitted) {
                res.statusCode = 404;
                res.end('Not Found');
            }
        });
    }

    _getRouteMask(path, method) {
        return  `[${req.url}]:[${req.method}]`
    }
}