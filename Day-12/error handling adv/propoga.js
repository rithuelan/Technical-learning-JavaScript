function level1() {
  level2();
}

function level2() {
  level3();
}

function level3() {
  throw new Error("Something went wrong in level 3");
}

try {
  level1();
} catch (err) {
  console.log("Caught an error:", err.message);
}
// Output: Caught an error: Something went wrong in level 3
