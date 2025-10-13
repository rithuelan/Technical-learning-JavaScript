let data = [1, 2, 3];
debugger; // pauses code here
data.forEach(num => console.log(num));
data.push(4);
console.log("Final data:", data);

data = data.map(num => num * 2);
console.log("Mapped data:", data);
data = data.filter(num => num > 4);
console.log("Filtered data:", data);
data = data.reduce((acc, num) => acc + num, 0);
console.log("Reduced data:", data);
// Use DevTools to step through each operation and inspect 'data' variable
// Add watches for 'data' variable to see its changes step-by-step
// Use console to log intermediate results if needed
// Experiment with breakpoints and stepping through the code
// Use the console to test small snippets of code
// Use the "Scope" section in DevTools to inspect local and global variables
// Use the "Call Stack" section to understand the flow of function calls
