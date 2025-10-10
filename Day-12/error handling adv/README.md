
🛠 Advanced Error Handling in JavaScript
Overview

Error handling in JavaScript allows you to detect, manage, and respond to runtime problems in your code. Advanced techniques include creating custom errors, propagating errors across functions, and using stack traces for debugging. Mastering these helps write robust and maintainable applications.

Table of Contents

Built-in Errors

Custom Errors

Error Propagation

Stack Traces

Try…Catch…Finally Structure

Best Practices

Mini Project Idea

1️⃣ Built-in Errors

JavaScript provides several built-in error types:

Error Type - Description
ReferenceError - Variable or function does not exist
TypeError - Value is of an unexpected type
SyntaxError - Invalid code syntax
RangeError - Value out of allowed range
URIError - Invalid URI handling
EvalError - Error in eval() function

Example:
try {
 console.log(nonExistentVar);
} catch (err) {
 console.log(err.name, ":", err.message);
}

2️⃣ Custom Errors

You can create your own error messages for application-specific rules.

Using throw with Error object:
function checkAge(age) {
 if(age < 18) {
  throw new Error("Age must be 18 or older!");
 }
 console.log("Age is valid ✅");
}

try {
 checkAge(15);
} catch(err) {
 console.log("Custom Error:", err.message);
}

Creating a Custom Error Class:
class ValidationError extends Error {
 constructor(message) {
  super(message);
  this.name = "ValidationError";
 }
}

try {
 throw new ValidationError("Invalid email format!");
} catch(err) {
 console.log(err.name + ": " + err.message);
}

3️⃣ Error Propagation

Errors can propagate through multiple function calls until they are caught.

function level3() {
 throw new Error("Something went wrong at level 3!");
}

function level2() {
 level3();
}

function level1() {
 level2();
}

try {
 level1();
} catch(err) {
 console.log("Caught at top level:", err.message);
}

4️⃣ Stack Traces

Every error in JavaScript contains a stack trace, which shows where the error occurred.

try {
 function a() { b(); }
 function b() { c(); }
 function c() { throw new Error("Oops!"); }

 a();
} catch(err) {
 console.log("Error message:", err.message);
 console.log("Stack trace:", err.stack);
}

5️⃣ Try…Catch…Finally Structure

try {
 // Code that may throw an error
} catch(err) {
 // Handle the error
} finally {
 // Cleanup code that always runs
}

Example:
try {
 throw new Error("Something broke!");
} catch(err) {
 console.log(err.message);
} finally {
 console.log("Cleanup done!");
}

6️⃣ Best Practices

Always catch errors that you can handle.

Use custom error classes for clarity in complex apps.

Use finally for cleanup (timers, DB connections, UI state).

Never silently ignore errors; log stack traces for debugging.

Validate input early and throw custom errors if invalid.

7️⃣ Mini Project Idea: Form Validator

Description: Build a small registration form that validates inputs and uses advanced error handling.

Features:

Validate username, email, password

Throw custom errors for invalid input

Catch errors and display friendly messages

Log stack traces in console for debugging

Use finally to reset form state or enable buttons

Example Concept:
class FormError extends Error {
 constructor(message) {
  super(message);
  this.name = "FormError";
 }
}

function validateEmail(email) {
 if(!email.includes("@")) {
  throw new FormError("Invalid email address!");
 }
}

try {
 validateEmail("rithiha.com");
} catch(err) {
 alert(err.message);
} finally {
 console.log("Validation complete.");
}
