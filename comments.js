const express = require('express');
const app = express();

// Route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
