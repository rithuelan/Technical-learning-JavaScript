// app_vulnerable.js  (UNSAFE - for local testing only!)
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));

const comments = [];

app.get('/comment', (req, res) => {
  res.send(`
    <h2>Post a comment (VULNERABLE)</h2>
    <form method="POST" action="/comment">
      <input name="name" placeholder="Name"/><br/>
      <textarea name="message" placeholder="Message"></textarea><br/>
      <button type="submit">Submit</button>
    </form>
    <p><a href="/comments">View comments</a></p>
  `);
});

app.post('/comment', (req, res) => {
  const name = req.body.name || 'Anonymous';
  const message = req.body.message || '';
  // <-- storing raw user input (no sanitization)
  comments.push({ name, message, when: new Date().toISOString() });
  res.send('<p>Saved. <a href="/comments">See comments</a></p>');
});

app.get('/comments', (req, res) => {
  let html = '<h2>Comments (VULNERABLE)</h2>';
  comments.forEach(c => {
    // WARNING: rendering raw HTML from user input
    html += `<div><strong>${c.name}</strong> <small>${c.when}</small><br/>` +
            `<p>${c.message}</p><hr/></div>`;
  });
  html += `<p><a href="/comment">Post another</a></p>`;
  res.send(html);
});

app.listen(3007, () => console.log('Vulnerable app running at http://localhost:3007/comment'));

//npm init -y
//npm install express
//node vulnerable.js  -bash