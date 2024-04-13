var express = require('express');
var app = express();
var fs = require('fs');

// Serve static files from the 'public' directory
app.use(express.static('public'));
// Parse JSON bodies of requests
app.use(express.json());

// GET request to retrieve comments
app.get('/comments', function(req, res){
    fs.readFile('comments.json', function(err, data){
        if (err) {
            console.error('Error reading comments:', err);
            res.status(500).send('Error reading comments');
            return;
        }
        res.json(JSON.parse(data));
    });
});

// POST request to add a new comment
app.post('/comments', function(req, res){
    fs.readFile('comments.json', function(readErr, data){
        if (readErr) {
            console.error('Error reading comments:', readErr);
            res.status(500).send('Error reading comments');
            return;
        }
        try {
            var comments = JSON.parse(data);
            comments.push(req.body);
            fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(writeErr){
                if (writeErr) {
                    console.error('Error writing comments:', writeErr);
                    res.status(500).send('Error writing comments');
                    return;
                }
                res.status(201).json(comments);
            });
        } catch (parseErr) {
            console.error('Error parsing JSON:', parseErr);
            res.status(400).send('Invalid JSON format');
        }
    });
});

// Start the server
var server = app.listen(3000, function(){
    console.log('Server is running at http://localhost:3000/');
});
