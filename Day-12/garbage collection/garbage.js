function createObject() {
  let obj = { name: "Rithiha" };
  console.log(obj);
}

createObject(); // obj exists inside the function
// After function ends, 'obj' is no longer reachable → GC cleans it up
