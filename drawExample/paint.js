var started = false;
var canvas, context;
var stampId = '';
var lastColor = 'black';
var lastStampId = '';
var enableDraw = false;
var color = "black";

function init() {
    canvas = $('#imageView').get(0);
    context = canvas.getContext('2d');

    // Auto-adjust canvas size to fit window.
    canvas.width = 960;
    canvas.height = 600;

    //$('#container').get(0).addEventListener('mousemove', onMouseMove, false);
    canvas.addEventListener('mousemove', onMouseMove, false);
    canvas.addEventListener('click', onClick, false);
    canvas.addEventListener('mousedown', function(e) {
        enableDraw = true;
    }, false);
    canvas.addEventListener('mouseup', function(e) {
            enableDraw = false;
            started = false;
        },
        false);

    // Add events for toolbar buttons.
    $('#red').get(0).addEventListener('click', function(e) {
        onColorClick(e.target.id);
        color = "red";
        console.log("color is " + color)
    }, false);
    $('#pink').get(0).addEventListener('click', function(e) {
        onColorClick(e.target.id);
        color = "pink";
    }, false);
    $('#fuchsia').get(0).addEventListener('click', function(e) {
        onColorClick(e.target.id);
        color = "fuchsia";
    }, false);
    $('#orange').get(0).addEventListener('click', function(e) {
        onColorClick(e.target.id);
        color = "orange";
    }, false);
    $('#yellow').get(0).addEventListener('click', function(e) {
        onColorClick(e.target.id);
        color = "yellow";
    }, false);
    $('#lime').get(0).addEventListener('click', function(e) {
        onColorClick(e.target.id);
        color = "lime";
    }, false);
    $('#green').get(0).addEventListener('click', function(e) {
        onColorClick(e.target.id);
        color = "green";
    }, false);
    $('#blue').get(0).addEventListener('click', function(e) {
        onColorClick(e.target.id);
        color = "blue";
    }, false);
    $('#purple').get(0).addEventListener('click', function(e) {
        onColorClick(e.target.id);
        color = "purple";
    }, false);
    $('#black').get(0).addEventListener('click', function(e) {
        onColorClick(e.target.id);
        color = "black";
    }, false);
    $('#white').get(0).addEventListener('click', function(e) {
        onColorClick(e.target.id);
        color = "white";
    }, false);
    /*$('#fill').get(0).addEventListener('click', function(e) {
        onFill();
    }, false);*/
    $('#save').get(0).addEventListener('click', function(e) {
        onSave();
    }, false);
}

function onMouseMove(ev) {
    var x, y;

    // Get the mouse position.
    if (ev.layerX >= 0) {
        // Firefox
        /*x = ev.layerX - 74;
        y = ev.layerY - 24;*/
        x = ev.layerX + 38;
        y = ev.layerY + 8;

    } else if (ev.offsetX >= 0) {
        // Opera
        x = ev.offsetX;
        y = ev.offsetY;
    }
    /* x = ev.clientX;
    y = ev.clientY;*/
    console.log(ev);
    if (enableDraw && stampId.length == 0) {
        var socket = io();

        if (!started) {
            started = true;
            context.strokeStyle = color;
            context.beginPath();
            context.moveTo(x, y);
            var moves = {
                x: x,
                y: y
            }
            socket.emit('move', moves);
            socket.emit('color', color);
            context.strokeStyle = color;
        } else {
            context.lineTo(x, y);
            context.stroke();
            var draws = {
                x: x,
                y: y
            }

            socket.emit('draw', draws);
        }
    }
    $('#stats').text((x) + ', ' + (y));
}

function onClick(e) {
    if (stampId.length > 0) {
        context.drawImage($(stampId).get(0), e.pageX - 90, e.pageY - 60, 80, 80);
    }
}
$(document).ready(function() {
    var tempcolor = "";
    var temp = ""
    var tempStart = "";
    var tempDraw = "";
    var socket = io();
    socket.emit('add user');
    socket.on('draw', function(drawing) {
        context.lineTo(drawing.x, drawing.y);
        context.stroke();
    })
    socket.on('color', function(colors) {
        console.log(colors);
        temp = context.strokeStyle;
        context.strokeStyle = colors;
    })
    socket.on('move', function(move) {
        console.log(move);
        //tempStart = move;
        context.beginPath();
        context.moveTo(move.x, move.y);
    })
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

function onFill() {
    // Start a new path to begin drawing in a new color.
    context.closePath();
    context.beginPath();

    context.fillStyle = context.strokeStyle;
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function onStamp(id) {
    // Update the stamp image.
    stampId = '#' + id;

    $(lastStampId).css("border", "0px dashed white");
    $(stampId).css("border", "1px dashed black");

    // Store stamp so we can un-highlight it next time around.
    lastStampId = stampId;
}

function onSave() {
    var img = canvas.toDataURL("image/png");
    document.write('<img src="' + img + '"/>');
}