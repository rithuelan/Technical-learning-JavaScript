// Basic Types
let username: string = "Rithiha";
let age: number = 22;
let isActive: boolean = true;

// Array Types
let scores: number[] = [90, 85, 70];

// Tuple Type (fixed length and type order)
let user: [string, number] = ["Alice", 30];

// Union Type (multiple possible types)
let id: string | number;
id = "abc123";
id = 101;

// Type Alias (custom reusable type)
type Status = "active" | "inactive";
let accountStatus: Status = "active";

// Function Type
function add(a: number, b: number): number {
  return a + b;
}

console.log(username, age, isActive, scores, user, id, accountStatus, add(10, 20));
