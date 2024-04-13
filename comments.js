// create web server
const express = require('express');
const app = express();
const port = 3000;

// add static files
app.use(express.static('public'));

// add comments
app.get('/comments', (req, res) => {
  res.send('Hello World!');
});

// start web server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Path: comments.html
// add comments
fetch('/comments')
  .then((response) => response.text())
  .then((text) => {
    document.getElementById('comments').innerHTML = text;
  });