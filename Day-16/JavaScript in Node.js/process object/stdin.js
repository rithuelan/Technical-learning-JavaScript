// process_examples/stdin.js
// Run: node stdin.js  (type lines and press Enter; Ctrl+D to end on UNIX or Ctrl+Z then Enter on Windows)
console.log('Enter text and press Enter (Ctrl+D to end):');

process.stdin.setEncoding('utf8');

process.stdin.on('data', chunk => {
  console.log('You typed:', chunk.trim());
});

process.stdin.on('end', () => {
  console.log('No more input, exiting.');
});
