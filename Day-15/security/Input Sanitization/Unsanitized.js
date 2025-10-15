const express = require('express');
const validator = require('validator');

const app = express();
app.use(express.urlencoded({ extended: false }));

const comments = [];

// form page
app.get('/comment', (req, res) => {
  res.send(`
    <h2>Post a comment (safe)</h2>
    <form method="POST" action="/comment">
      <input name="name" placeholder="Name"/><br/>
      <textarea name="message" placeholder="Message"></textarea><br/>
      <button type="submit">Submit</button>
    </form>
    <p><a href="/comments">View all comments</a></p>
  `);
});

// save comment
app.post('/comment', (req, res) => {
  const name = req.body.name || 'Anonymous';
  const message = req.body.message || '';
  comments.push({ name, message });
  res.send('<p>Thanks! <a href="/comments">See comments</a></p>');
});

// show comments (escaped output)
app.get('/comments', (req, res) => {
  let html = '<h2>Comments</h2>';
  comments.forEach(c => {
    const safeName = validator.escape(c.name);
    const safeMsg = validator.escape(c.message);
    html += `<div><b>${safeName}</b><br/>${safeMsg}<hr/></div>`;
  });
  html += `<p><a href="/comment">Post another</a></p>`;
  res.send(html);
});

app.listen(3006, () => console.log('Safe app at http://localhost:3006/comment'));


//npm init -y
//npm install validator 
//node Unsanitized.js  -bash