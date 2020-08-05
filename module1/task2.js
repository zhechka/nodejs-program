const csv=require('csvtojson')
const fs = require('fs');
const { pipeline } = require('stream');

const filePathToRead = './files/nodejs-task2.csv';
const filePathToWrite = './files/nodejs-task2.txt';

const writable = fs.createWriteStream(filePathToWrite);
const readable = fs.createReadStream(filePathToRead);

pipeline(
    readable,
    csv(),
    writable,
    (error) => {
         error ? console.error('failed to write file') : console.log('writing is over');
    }
)

