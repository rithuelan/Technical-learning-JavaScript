"use strict";
// Basic Types
let username = "Rithiha";
let age = 22;
let isActive = true;
// Array Types
let scores = [90, 85, 70];
// Tuple Type (fixed length and type order)
let user = ["Alice", 30];
// Union Type (multiple possible types)
let id;
id = "abc123";
id = 101;
let accountStatus = "active";
// Function Type
function add(a, b) {
    return a + b;
}
console.log(username, age, isActive, scores, user, id, accountStatus, add(10, 20));
