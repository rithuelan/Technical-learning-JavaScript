// sanitize-mock.js
const validator = require("validator");

// Mock request object (simulate incoming form data)
const req = {
  body: {
    username: "<script>alert('xss')</script>John",
    email: "  ExAmPlE+test@Gmail.COM  "
  }
};

// Sanitize / normalize
const username = validator.escape(req.body.username); // Escapes HTML tags
const email = validator.normalizeEmail(req.body.email); // Normalize email

console.log("Sanitized username:", username);
console.log("Normalized email:", email);

//npm init -y
//npm install validator
//node Safe.js  -bash
