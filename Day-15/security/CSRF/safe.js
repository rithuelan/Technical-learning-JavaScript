const express = require('express');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const bodyParser = require('body-parser');

const app = express();
const csrfProtection = csrf({ cookie: true });

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

// Step 1: Serve a form with a valid CSRF token
app.get('/form', csrfProtection, (req, res) => {
  res.send(`
    <h2>Secure Form</h2>
    <form action="/process" method="POST">
      <input type="hidden" name="_csrf" value="${req.csrfToken()}">
      <input type="text" name="message" placeholder="Type something..." />
      <button type="submit">Submit</button>
    </form>
  `);
});

// Step 2: Process the form safely
app.post('/process', csrfProtection, (req, res) => {
  res.send('✅ Data successfully received and CSRF token verified!');
});

// Step 3: Start server
app.listen(3000, () => console.log('✅ Server running on http://localhost:3000/form'));




//npm init -y
//npm install express csurf cookie-parser
//node safe.js  -bash

//http://localhost:3000/form