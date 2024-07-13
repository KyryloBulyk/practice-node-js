const http = require('http');
const EventEmitter = require('events');
const Router = require('./framework/Router');
const PORT = process.env.PORT || 8000;

const emitter = new EventEmitter();

const router = new Router();

router.get('/users', (req, res) => {
    res.end('YOU SEND REQUEST TO /USERS')
});

router.get('/posts', (req, res) => {
    res.end('YOU SEND REQUEST TO /POSTS')
});

const server = http.createServer((req, res) => {
    const emitted = emitter.emit(`[${req.url}]:[${req.method}]`, req, res);
    
    if (!emitted) {
        res.statusCode = 404;
        res.end('Not Found');
    }
})

server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));