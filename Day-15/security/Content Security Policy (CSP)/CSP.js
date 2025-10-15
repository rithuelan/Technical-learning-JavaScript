// server.js
const express = require("express");
const helmet = require("../../../node_modules/helmet/index.d.cts");

const app = express();
app.use(helmet()); // includes CSP + other security headers

// Custom CSP
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "https://fonts.googleapis.com"],
      imgSrc: ["'self'", "data:"],
    },
  })
);

app.get("/", (req, res) => res.send("<h1>Secure Page</h1>"));

app.listen(4000, () => console.log("CSP running on port 4000"));



//node CSP.js  -bash
//npm init -y
//npm install express helmet
