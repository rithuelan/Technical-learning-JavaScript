let city = "Chennai";     // inferred as string
let price = 499;          // inferred as number
let isAvailable = true;   // inferred as boolean

// TypeScript infers 'number' return type automatically
function multiply(x: number, y: number) {
  return x * y;
}

let result = multiply(5, 10); // inferred as number

console.log(city, price, isAvailable, result);
