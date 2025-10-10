1️⃣ Garbage Collection

What it is: JavaScript automatically cleans up memory that is no longer needed. You don’t have to manually free memory like in C/C++.

How it works: JS keeps track of which objects are reachable from the root (like global variables or functions currently running). Any object that can’t be reached is removed from memory.

Example:

let obj = { name: "Rithiha" };
obj = null; // obj no longer points to the object → JS frees memory


Think of it like:
If nobody has a key to a house, the house gets demolished automatically.

2️⃣ Memory Leaks

What it is: When memory is still being used but is no longer needed, it creates a leak. Over time, leaks slow down or crash your app.

Common causes:

Global variables you forgot to remove.

Timers or intervals that keep running.

Detached DOM nodes that are still referenced in JS.

Closures holding onto big objects unnecessarily.

Example:

function createLeak() {
  const hugeArray = new Array(1000000).fill("leak");
  return function() {
    console.log(hugeArray[0]); // hugeArray stays in memory
  };
}
const leakFunc = createLeak();


Think of it like:
A bucket that keeps filling with water but never emptied → eventually it overflows.

3️⃣ References

Primitive types (number, string, boolean) are stored by value. Copying them creates a separate copy.

Objects/arrays/functions are stored by reference. Copying them just copies the pointer, not the actual data.

Example:

let obj1 = { name: "Rithiha" };
let obj2 = obj1; // obj2 points to the same object
obj2.name = "Elangovan";
console.log(obj1.name); // "Elangovan"


Think of it like:
Two people holding the same book. If one writes in it, the other sees the same changes because it’s the same object.

When no variable references an object, it becomes eligible for garbage collection.

Why it Matters

Helps your app run smoothly.

Prevents memory leaks that slow down or crash your app.

Teaches you to write efficient, maintainable code by managing object references carefully.
