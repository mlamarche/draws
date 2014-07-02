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

    canvas = $('#imageView').get(0);
    context = canvas.getContext('2d');

    canvas.width = "1000px";
    canvas.height = "667px";

    canvas.addEventListener('mousemove', onMouseMove, false);
    canvas.addEventListener('click', onClick, false);

    // Add events for toolbar buttons.
    $('#red').get(0).addEventListener('click', function(e) {
        onColorClick(e.target.id);
        console.log("I clicked " + e);
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


    function onColorClick(color) {
        // Start a new path to begin drawing in a new color.
        context.closePath();
        context.beginPath();

        // Select the new color.
        context.strokeStyle = color;

        // Highlight selected color.
        var borderColor = 'white';
        if (color == 'white' || color == 'yellow') {
            borderColor = 'black';
        }

        $('#' + lastColor).css("border", "0px dashed white");
        $('#' + color).css("border", "1px dashed " + borderColor);

        // Store color so we can un-highlight it next time around.
        lastColor = color;
    }

    socket.emit('add user');
};