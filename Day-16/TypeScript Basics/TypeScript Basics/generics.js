"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generic function
function identity(value) {
    return value;
}
console.log(identity("Hello TS!"));
console.log(identity(123));
// Generic Array Function
function printArray(arr) {
    arr.forEach(item => console.log(item));
}
printArray(["apple", "banana", "mango"]);
const userResponse = {
    status: 200,
    data: { id: 1, name: "Rithiha" }
};
console.log(userResponse);
//# sourceMappingURL=generics.js.map