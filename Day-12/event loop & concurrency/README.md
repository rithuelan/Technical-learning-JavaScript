⏳ Event Loop & Concurrency in JavaScript
Overview

JavaScript is a single-threaded language, meaning it executes one operation at a time. However, it can handle asynchronous operations efficiently using the event loop, task queues, and Web APIs. Understanding these concepts is crucial for writing non-blocking, performant applications.

Table of Contents

Call Stack

Web APIs

Task Queue (Callback Queue)

Microtasks (Promise Queue)

Rendering & Browser Repainting

Event Loop Example

Best Practices

1️⃣ Call Stack

The call stack keeps track of function execution in a Last In, First Out (LIFO) manner.

Example:

function first() {
  second();
  console.log("first");
}

function second() {
  console.log("second");
}

first();


Output:

second
first


Explanation:

first() is pushed to the stack

second() is called → pushed to the stack

second() executes → popped

first() resumes → popped

2️⃣ Web APIs

Web APIs are browser-provided features like setTimeout, fetch, and DOM events.

Functions like setTimeout are handled outside the call stack.

Once finished, they push their callbacks to the task queue.

Example:

setTimeout(() => {
  console.log("Hello from Web API!");
}, 1000);

console.log("Hello from call stack!");


Output:

Hello from call stack!
Hello from Web API!

3️⃣ Task Queue (Callback Queue)

The task queue stores callbacks from asynchronous operations.

The event loop picks tasks from this queue only when the call stack is empty.

Example:

console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

console.log("End");


Output:

Start
End
Timeout callback


Even with 0ms delay, the callback waits for the stack to be empty.

4️⃣ Microtasks (Promise Queue)

Microtasks have higher priority than the task queue.

Promises and MutationObserver callbacks go here.

They run before the next task from the task queue.

Example:

console.log("Start");

setTimeout(() => {
  console.log("Task Queue");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask Queue");
});

console.log("End");


Output:

Start
End
Microtask Queue
Task Queue

5️⃣ Rendering & Browser Repainting

Rendering occurs after the call stack and all microtasks are empty.

Browser updates the UI and paints elements.

Heavy synchronous code can block rendering, causing UI lag.

6️⃣ Event Loop Example
console.log("Script start");

setTimeout(() => { console.log("setTimeout"); }, 0);

Promise.resolve()
  .then(() => { console.log("Promise 1"); })
  .then(() => { console.log("Promise 2"); });

console.log("Script end");


Execution Flow:

Call stack executes synchronous code: "Script start" → "Script end"

Microtasks run: "Promise 1" → "Promise 2"

Task queue runs: "setTimeout"

Output:

Script start
Script end
Promise 1
Promise 2
setTimeout

7️⃣ Best Practices

Avoid blocking the call stack with heavy synchronous code.

Use Promises or async/await for asynchronous operations.

Remember: Microtasks run before the task queue.

Test long-running operations to prevent UI freezing.

✅ Mastering the event loop, task queue, microtasks, and rendering ensures your JavaScript code runs efficiently and asynchronously, without blocking the UI.
