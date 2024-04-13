// create web server
// create a route for comments
// create a form to submit comments
// create a route to handle the form submission
// create a route to display comments

// create web server
const express = require('express');
const app = express();
const path = require('path');
const comments = [];

// create a route for comments
app.get('/comments', (req, res) => {
  res.sendFile(path.join(__dirname, 'comments.html'));
});

// create a form to submit comments
app.post('/comments', (req, res) => {
  comments.push(req.body.comment);
  res.redirect('/comments');
});

// create a route to handle the form submission
app.get('/comments', (req, res) => {
  res.sendFile(path.join(__dirname, 'comments.html'));
});

// create a route to display comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// create comments.html
// create a form to submit comments
// create a route to display comments

// create a form to submit comments
// <form action="/comments" method="POST">
//   <input type="text" name="comment">
//   <button type="submit">Submit</button>
// </form>

// create a route to display comments
// <ul>
//   <% comments.forEach(comment => { %>
//     <li><%= comment %></li>
//   <% }) %>
// </ul>