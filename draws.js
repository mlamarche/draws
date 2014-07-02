/* main javascript function*/
$(document).ready(function() {
    console.log("NOOOO");
    var socket = io();

    socket.emit('add user');
});