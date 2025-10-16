// process_examples/cli.js
// Usage: node cli.js arg1 arg2
console.log('argv:', process.argv.slice(2));

if (process.env.DEBUG) {
  console.log('Debug mode is ON');
}

console.log('Current working dir:', process.cwd());
console.log('Node version:', process.version);

// Exit with code via env or default
const exitCode = Number(process.env.EXIT_CODE) || 0;
console.log('Exiting with code', exitCode);
process.exit(exitCode);

// To run:
// DEBUG=1 EXIT_CODE=2 node cli.js foo bar
// (on Windows use `set DEBUG=1&& set EXIT_CODE=2&& node cli.js foo bar`)
// node cli.js
// echo %ERRORLEVEL%  (on Windows to see exit code)