const fs = require('fs');
const path = require('path');

// console.log("START");

// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//     if(err) {
//         console.log(err);
//         return;
//     }

//     console.log('Folder was created');
// });

// console.log("END");

const writeFileAsync = async(path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if(err) {
            return reject(err.message);
        }

        resolve();
    }));
};

const appendFileAsync = async(path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if(err) {
            return reject(err.message);
        }

        resolve();
    }));
};

writeFileAsync(path.resolve(__dirname, 'test.txt'), 'data')
    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '123'))
    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '456'))
    .catch(err => console.log(err));