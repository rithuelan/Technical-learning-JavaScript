// ❌ Bad: Mutating array
let nums = [1, 2, 3];
nums.push(4); // changes original array

// ✅ Good: Immutable
let newNums = [...nums, 4];
console.log(nums);    // [1, 2, 3]
console.log(newNums); // [1, 2, 3, 4]
