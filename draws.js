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

	var img = document.getElementById('http://i1252.photobucket.com/albums/hh570/mudzy2k6/Whiteboard_Background_zpsbba3bfab.png');
    //or however you get a handle to the IMG
    var w = img.clientWidth;
    var h = img.clientHeight;
    console.log("width:" + w + " and height:" + h)
    // Auto-adjust canvas size to fit window.
    canvas.width = w;
    canvas.height = h;

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
}

function onMouseMove(ev) {
	var x, y;
	// Get the mouse position.
	if (ev.layerX >= 0) {
		// Firefox
		x = ev.layerX - 50;
		y = ev.layerY - 5;
	}
	else if (ev.offsetX >= 0) {
		// Opera
		x = ev.offsetX - 50;
		y = ev.offsetY - 5;
	}

	if (!started) {
		started = true;

		context.beginPath();
		context.moveTo(x, y);		
	}
	else {
		context.lineTo(x, y);
		context.stroke();
	}

	$('#stats').text(x + ', ' + y);
}

unction onClick(e) {
	if (stampId.length > 0) {
		context.drawImage($(stampId).get(0), e.pageX - 90, e.pageY - 60, 80, 80);
	}
}


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

