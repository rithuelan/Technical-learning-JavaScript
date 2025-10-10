// Custom Error Class
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// Validation Functions
function validateName(name) {
  if (!name.match(/^[A-Za-z]{2,20}$/)) {
    throw new ValidationError("Name must be 2-20 letters only");
  }
  return name;
}

function validateEmail(email) {
  if (!email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)) {
    throw new ValidationError("Invalid email format");
  }
  return email;
}

function validateAge(age) {
  if (age < 18 || age > 100) {
    throw new ValidationError("Age must be between 18 and 100");
  }
  return age;
}

// Main Function
function validateUser(user) {
  // Errors propagate from individual functions
  const name = validateName(user.name);
  const email = validateEmail(user.email);
  const age = validateAge(user.age);
  return `User ${name} (${email}, ${age} years old) is valid!`;
}

// Test
const users = [
  { name: "Alice", email: "alice@example.com", age: 25 },
  { name: "B", email: "bob@", age: 17 }
];

users.forEach((user) => {
  try {
    const result = validateUser(user);
    console.log(result);
  } catch (err) {
    console.log(`${err.name}: ${err.message}`);
    console.log(err.stack); // stack trace for debugging
  }
});
