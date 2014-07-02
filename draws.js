/* main javascript function*/



/* code for toolbar buttons
if (window.addEventListener) {
   window.addEventListener('load', function() { init(); });
}

var started = false;
var canvas, context;
var stampId = '';
var lastColor = 'black';
var lastStampId = '';

function init() {
    canvas = $('#imageView').get(0);
    context = canvas.getContext('2d');

    // Auto-adjust canvas size to fit window.
    canvas.width  = window.innerWidth - 75;
    canvas.height = window.innerHeight - 75;

    canvas.addEventListener('mousemove', onMouseMove, false);
    canvas.addEventListener('click', onClick, false);

    // Add events for toolbar buttons.
    $('#red').get(0).addEventListener('click', function(e) { 
     onColorClick(e.target.id); }, false);
    $('#pink').get(0).addEventListener('click', function(e) { 
     onColorClick(e.target.id); }, false);
    $('#fuchsia').get(0).addEventListener('click', function(e) { 
     onColorClick(e.target.id); }, false);
    $('#orange').get(0).addEventListener('click', function(e) { 
     onColorClick(e.target.id); }, false);
    $('#yellow').get(0).addEventListener('click', function(e) { 
     onColorClick(e.target.id); }, false);
    $('#lime').get(0).addEventListener('click', function(e) { 
     onColorClick(e.target.id); }, false);
    $('#green').get(0).addEventListener('click', function(e) { 
     onColorClick(e.target.id); }, false);
    $('#blue').get(0).addEventListener('click', function(e) { 
     onColorClick(e.target.id); }, false);
    $('#purple').get(0).addEventListener('click', function(e) { 
     onColorClick(e.target.id); }, false);
    $('#black').get(0).addEventListener('click', function(e) { 
     onColorClick(e.target.id); }, false);
    $('#white').get(0).addEventListener('click', function(e) { 
     onColorClick(e.target.id); }, false);
    $('#cat').get(0).addEventListener('click', function(e) { 
     onStamp(e.target.id); }, false);
    $('#dragonfly').get(0).addEventListener('click', function(e) { 
     onStamp(e.target.id); }, false);
    $('#ladybug').get(0).addEventListener('click', function(e) { 
     onStamp(e.target.id); }, false);
    $('#heart').get(0).addEventListener('click', function(e) { 
     onStamp(e.target.id); }, false);
    $('#dog').get(0).addEventListener('click', function(e) { 
     onStamp(e.target.id); }, false);
    $('#fill').get(0).addEventListener('click', function(e) { onFill(); }, false);
    $('#save').get(0).addEventListener('click', function(e) { onSave(); }, false);

$(document).ready(function() {
    console.log("NOOOO");
    var socket = io();

    socket.emit('add user');
});
