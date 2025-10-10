class ValidationError extends Error {
  constructor(message) {
    super(message); // call parent Error constructor
    this.name = "ValidationError"; // custom name
  }
}

// Using custom error
function checkAge(age) {
  if (age < 18) {
    throw new ValidationError("Age must be at least 18");
  }
  return "Access granted";
}

try {
  console.log(checkAge(15));
} catch (err) {
  console.log(`${err.name}: ${err.message}`);
}
// Output: ValidationError: Age must be at least 18
