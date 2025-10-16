// fs_examples/streamCopy.js
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'largeSource.bin');   // create a test file if needed
const dest = path.join(__dirname, 'copied.bin');

const read = fs.createReadStream(src);
const write = fs.createWriteStream(dest);

read.on('error', err => console.error('Read error:', err));
write.on('error', err => console.error('Write error:', err));
write.on('close', () => console.log('Copy finished.'));

read.pipe(write);
