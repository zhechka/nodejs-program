import csv from 'csvtojson';
import { createWriteStream, createReadStream } from 'fs';
import { pipeline } from 'stream';

const filePathToRead = './files/nodejs-task2.csv';
const filePathToWrite = './files/nodejs-task3.txt';

const writable = createWriteStream(filePathToWrite);
const readable = createReadStream(filePathToRead);

pipeline(
    readable,
    csv(),
    writable,
    (error) => {
         error ? console.error('failed to write file') : console.log('writing is over');
    }
)

