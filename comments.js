// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(express.static('public'));
app.use(bodyParser.json());

// handling GET request
app.get('/comments', function(req, res){
    fs.readFile('comments.json', function(err, data){
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    });
});

// handling POST request
app.post('/comments', function(req, res){
    fs.readFile('comments.json', function(err, data){
        var comments = JSON.parse(data);
        comments.push(req.body);
        fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err){
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(comments));
        });
    });
});

// start server
var server = app.listen(3000, function(){
    console.log('Server is running at http://localhost:3000/');
});