const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.sendfile('./index.html');
});

app.get('/radar-chart.js', function(req, res){
    res.sendfile('./radar-chart.js');
});

app.get('/pokemon.js', function(req, res){
    res.sendfile('./pokemon.js');
});

app.get('/pokemon-type.js', function(req, res){
    res.sendfile('./pokemon-type.js');
});

app.listen(3000);
