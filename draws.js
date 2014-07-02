/* main javascript function*/



if (window.addEventListener) {
    window.addEventListener('load', function() {
        init();
    });
}

var started = false;
var canvas, context;
var stampId = '';
var lastColor = 'black';
var lastStampId = '';

function init() {
    canvas = $('#board').get(0);
    context = canvas.getContext('2d');

    var img = document.getElementById('http://i1252.photobucket.com/albums/hh570/mudzy2k6/Whiteboard_Background_zpsbba3bfab.png');
    //or however you get a handle to the IMG
    var w = img.clientWidth;
    var h = img.clientHeight;
    // Auto-adjust canvas size to fit window.
    canvas.width = w;
    canvas.height = h;

    canvas.addEventListener('mousemove', onMouseMove, false);
    canvas.addEventListener('click', onClick, false);

    // Add events for toolbar buttons.
    $('#red').get(0).addEventListener('click', function(e) {
        onColorClick(e.target.id);
    }, false);
    $('#pink').get(0).addEventListener('click', function(e) {
        onColorClick(e.target.id);
    }, false);
    $('#fuchsia').get(0).addEventListener('click', function(e) {
        onColorClick(e.target.id);
    }, false);
    $('#orange').get(0).addEventListener('click', function(e) {
        onColorClick(e.target.id);
    }, false);
    $('#yellow').get(0).addEventListener('click', function(e) {
        onColorClick(e.target.id);
    }, false);
    $('#lime').get(0).addEventListener('click', function(e) {
        onColorClick(e.target.id);
    }, false);
    $('#green').get(0).addEventListener('click', function(e) {
        onColorClick(e.target.id);
    }, false);
    $('#blue').get(0).addEventListener('click', function(e) {
        onColorClick(e.target.id);
    }, false);
    $('#purple').get(0).addEventListener('click', function(e) {
        onColorClick(e.target.id);
    }, false);
    $('#black').get(0).addEventListener('click', function(e) {
        onColorClick(e.target.id);
    }, false);
    $('#white').get(0).addEventListener('click', function(e) {
        onColorClick(e.target.id);
    }, false);
    $('#cat').get(0).addEventListener('click', function(e) {
        onStamp(e.target.id);
    }, false);
    $('#dragonfly').get(0).addEventListener('click', function(e) {
        onStamp(e.target.id);
    }, false);
    $('#ladybug').get(0).addEventListener('click', function(e) {
        onStamp(e.target.id);
    }, false);
    $('#heart').get(0).addEventListener('click', function(e) {
        onStamp(e.target.id);
    }, false);
    $('#dog').get(0).addEventListener('click', function(e) {
        onStamp(e.target.id);
    }, false);
    $('#fill').get(0).addEventListener('click', function(e) {
        onFill();
    }, false);
    $('#save').get(0).addEventListener('click', function(e) {
        onSave();
    }, false);

    $(document).ready(function() {
        console.log("NOOOO");
        var socket = io();

        socket.emit('add user');
    });