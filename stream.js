const fs = require('fs');
const path = require('path');

// fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) => {
//     if(err) {
//         throw err;
//     }

//     console.log(data);
// })

const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'));

stream.on('data', (chunk) => {
    console.log(chunk);
})