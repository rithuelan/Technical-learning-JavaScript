// vulnerable.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express(); // ✅ You must create the app

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Fake user
const fakeUser = { id: 1, email: "user@example.com" };

// Fake updateEmail function
function updateEmail(userId, newEmail) {
  console.log(`Updating user ${userId} email to ${newEmail}`);
  fakeUser.email = newEmail;
}

// Vulnerable route (no CSRF protection)
app.post("/update-email", (req, res) => {
  updateEmail(fakeUser.id, req.body.email);
  res.send(`Email updated to: ${fakeUser.email}`);
});

// Simple form to test
app.get("/form", (req, res) => {
  res.send(`
    <form method="POST" action="/update-email">
      <input type="email" name="email" placeholder="New Email" />
      <button type="submit">Update Email</button>
    </form>
  `);
});

// Start the server
app.listen(3000, () => console.log("Server running on http://localhost:3000/form"));


//npm init -y
//npm install express body-parser
//node vulnerable.js  -bash

//http://localhost:3000/form
//Use the form to see the vulnerability in action