/* server javascript*/
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;
app.get('/', function(req, res) {
    res.sendfile('index.html');
});
app.get('/draws.js', function(req, res) {
    res.sendfile('draws.js');
});
app.get('/style.css', function(req, res) {
    res.sendfile('style.css');
});
server.listen(port, function() {
    console.log('Server listening at port %d', port);
});
// Routing
io.on('connection', function(socket) {
    console.log("A user has joined");
    socket.on('disconnect', function() {
        console.log("A user has disconnected");
    })
});
/*
<img src="http://i1252.photobucket.com/albums/hh570/mudzy2k6/Whiteboard_Background_zpsbba3bfab.png">
*/