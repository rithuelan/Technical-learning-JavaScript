// Generic function
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello TS!"));
console.log(identity<number>(123));

// Generic Array Function
function printArray<T>(arr: T[]): void {
  arr.forEach(item => console.log(item));
}
printArray<string>(["apple", "banana", "mango"]);

// Generic Interface
interface ApiResponse<T> {
  status: number;
  data: T;
}

const userResponse: ApiResponse<{ id: number; name: string }> = {
  status: 200,
  data: { id: 1, name: "Rithiha" }
};

console.log(userResponse);
