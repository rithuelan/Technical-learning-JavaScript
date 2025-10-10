function a() { b(); }
function b() { c(); }
function c() { throw new Error("Debug this!"); }

try {
  a();
} catch (err) {
  console.log(err.stack);
}
/* Sample Output:
Error: Debug this!
    at c (script.js:3:13)
    at b (script.js:2:5)
    at a (script.js:1:5)
    at <anonymous>:1:3
*/
