"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let city = "Chennai"; // inferred as string
let price = 499; // inferred as number
let isAvailable = true; // inferred as boolean
// TypeScript infers 'number' return type automatically
function multiply(x, y) {
    return x * y;
}
let result = multiply(5, 10); // inferred as number
console.log(city, price, isAvailable, result);
//# sourceMappingURL=typeInference.js.map