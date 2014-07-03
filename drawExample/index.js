/* server javascript*/
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;
app.get('/', function(req, res) {
    res.sendfile('paint.html');
});
app.get('/paint.js', function(req, res) {
    res.sendfile('paint.js');
});
app.get('/init.js', function(req, res) {
    res.sendfile('init.js');
});
server.listen(port, function() {
    console.log('Server listening at port %d', port);
});
// Routing
io.on('connection', function(socket) {
    console.log("A user has joined");
    socket.on('draw', function(draws) {
        console.log("Someone is drawing", draws);
        socket.broadcast.emit('draw', draws);
    })
    socket.on('move', function(moves) {
        console.log("Someone started drawing", moves)
        socket.broadcast.emit('move', moves);
    })
    socket.on('color', function(color) {
        console.log(color);
        socket.broadcast.emit('color', color);
    })
    socket.on('disconnect', function() {
        console.log("A user has disconnected");
    })
});
/*
<img src="http://i1252.photobucket.com/albums/hh570/mudzy2k6/Whiteboard_Background_zpsbba3bfab.png">
*/