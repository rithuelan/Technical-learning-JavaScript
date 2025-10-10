function leak() {
  leakedVar = "I am global"; // forgot 'let' or 'const'
}
leak();
console.log(leakedVar); // still accessible globally
// Fix: Always declare variables with 'let', 'const', or 'var' to avoid globals
// Globals persist for the app's lifetime → potential memory leak
// In strict mode, this would throw an error

// Best Practice: Use strict mode to catch undeclared variables
"use strict";
function noLeak() {
    let localVar = "I am local"; // properly declared
    console.log(localVar);
}
noLeak();
// console.log(localVar); // Error: localVar is not defined
// Use closures or modules to encapsulate variables and avoid polluting global scope
// Regularly review and clean up unused global variables to prevent memory leaks
// In Node.js, use modules to encapsulate code and avoid globals
// In browsers, use IIFEs (Immediately Invoked Function Expressions) to create local scopes
