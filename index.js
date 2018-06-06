const express = require('express');


var app = express();

app.get('/', function(req, res) {


    res.end('hello');



});

app.listen(3000, 'localhost');
console.log('starting node on localhost 3000');