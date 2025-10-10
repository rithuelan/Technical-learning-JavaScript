function createClosure() {
  let largeArray = new Array(1000000).fill("leak");
  return function() {
    console.log(largeArray.length);
  }
}

let closure = createClosure();
// largeArray remains in memory because closure references it
closure();

// To avoid memory leaks with closures:
// 1. Nullify references when no longer needed
closure = null; // Now largeArray can be garbage collected
// 2. Limit closure scope to only necessary variables
// 3. Regularly review code for unintended closures holding large objects
// 4. Use tools to monitor memory usage and detect leaks
// 5. In long-running applications, consider using WeakMap or WeakSet for storing references that can be garbage collected when no longer in use
// 6. Be cautious with event listeners and DOM references in closures, as they can prevent elements from being garbage collected
// 7. Use profiling tools in browsers or Node.js to identify memory leaks related to closures
// 8. Avoid creating closures inside loops that can lead to multiple references being held unintentionally
// 9. Educate team members about best practices for using closures to prevent memory leaks
// 10. Regularly test and refactor code to ensure closures are used appropriately and do not lead to memory leaks
// Note: The above practices help in managing memory effectively when using closures in JavaScript.
