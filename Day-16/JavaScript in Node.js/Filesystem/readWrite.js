// fs_examples/readWrite.js
const fs = require('fs').promises;
const path = require('path');

(async () => {
  const file = path.join(__dirname, 'data.txt');

  // write (overwrites)
  await fs.writeFile(file, 'Hello Node.js\n');

  // append
  await fs.appendFile(file, 'Appended line\n');

  // read
  const content = await fs.readFile(file, 'utf8');
  console.log('File content:\n', content);
})();
