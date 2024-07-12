const Emmiter = require('events');

const emmitter = new Emmiter();

emmitter.on('message', (data, second, third) => {
    console.log('You send message ' + data);
    console.log('Second argument ' + second);
});

const MESSAGE = process.env.MESSAGE || '';

if(MESSAGE) {
    emmitter.emit('message', MESSAGE, 123);
} else {
    emmitter.emit('message', 'You didn\'t send message');
}
