function first() { second(); console.log("first"); }
function second() { console.log("second"); }

first();
// Output:
// second
// first
// Explanation:
// 1. Call stack starts with first()
// 2. first() calls second(), so second() is added to the stack
// 3. second() runs and logs "second", then completes and is removed from stack
// 4. Control returns to first(), which logs "first" and then completes and is removed from stack

// Demonstrating stack overflow with recursion
function recurse() {
  return recurse();
}       
// Uncommenting the next line will cause a stack overflow error
// recurse();
// Output: RangeError: Maximum call stack size exceeded
// Explanation: Each call to recurse() adds a new frame to the stack without ever completing, eventually exceeding the call stack limit
// Note: Be cautious when running the recurse() function as it will crash the environment due to stack overflow.
// In real applications, avoid unbounded recursion to prevent stack overflow errors.
// Use try-catch to handle potential errors
