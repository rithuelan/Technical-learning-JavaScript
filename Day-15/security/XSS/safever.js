// app_safe.js  (SAFE)
const express = require('express');
const validator = require('validator');
const app = express();
app.use(express.urlencoded({ extended: false }));

const comments = [];

function escapeAndFormat(text) {
  if (typeof text !== 'string') return '';
  const trimmed = text.slice(0, 2000);            // limit length
  const escaped = validator.escape(trimmed);      // escape < > & " ' /
  // convert newlines to <br> for readable output
  return escaped.replace(/\r?\n/g, '<br/>');
}

app.get('/comment', (req, res) => {
  res.send(`
    <h2>Post a comment (SAFE)</h2>
    <form method="POST" action="/comment">
      <input name="name" placeholder="Name"/><br/>
      <textarea name="message" placeholder="Message"></textarea><br/>
      <button type="submit">Submit</button>
    </form>
    <p><a href="/comments">View comments</a></p>
  `);
});

app.post('/comment', (req, res) => {
  const name = (req.body.name || 'Anonymous').toString().slice(0, 100);
  const message = (req.body.message || '').toString().slice(0, 2000);
  // store raw or partially sanitized; we ALWAYS escape on output below
  comments.push({ name, message, when: new Date().toISOString() });
  res.send('<p>Saved safely. <a href="/comments">See comments</a></p>');
});

app.get('/comments', (req, res) => {
  let html = '<h2>Comments (SAFE)</h2>';
  comments.forEach(c => {
    const safeName = escapeAndFormat(c.name);
    const safeMsg  = escapeAndFormat(c.message);
    html += `<div><strong>${safeName}</strong> <small>${c.when}</small><br/>` +
            `<p>${safeMsg}</p><hr/></div>`;
  });
  html += `<p><a href="/comment">Post another</a></p>`;
  res.send(html);
});

app.listen(3006, () => console.log('Safe app running at http://localhost:3006/comment'));


//node safever.js  -bash
//npm init -y
//npm install validator