var intervalId = null;

function getCurrentTime() {
	console.log("Entering into getCurrentTime");

	var currTime = new Date();

	console.log(currTime);

	return currTime;
}

function paintDigital() {
	console.log("Entering into paintDigital");
	currTime = getCurrentTime();
	document.getElementById("main_content").innerHTML = 
	( currTime.getHours() 	>= 10 ? currTime.getHours()	 : "0" + currTime.getHours())
	+ ":" + 
	( currTime.getMinutes() >= 10 ? currTime.getMinutes() : "0" + currTime.getMinutes())
	+ ":" + 
	( currTime.getSeconds() >= 10 ? currTime.getSeconds() : "0" + currTime.getSeconds());
}

function paintAnalog() {
	console.log("Entering into paintAnalog");
	
	// Canvas is not behaving like SVG. An SVG can be defined to be 25x25 and later can me made to be 
	// part of a 1024x1024 screen and it will resize itself without any loss of quality (like a optical zoom)
	// But doing so for canvas is stretching itself and losing quality (like a digital zoom)
	// So what I have done here is, get the window dimensions and then setting the canvas accordingly.

	var dimen = 0;

	// Computers are wide screens and mobiles are long screens, so pick the lowest possibility as that there is no scrolling.
	// This is my way of doing it a responsive screen :-)
	if (window.innerWidth > window.innerHeight) {
		dimen = window.innerHeight;
	} else {
		dimen = window.innerWidth;
	}

	// let to 75% of the available window, 100% will be like, "ON YOUR FACE!!"
	dimen = (( dimen * 75 ) / 100 );

	console.log("window.innerWidth[" + window.innerWidth 
	            + "] :: window.innerHeight[" + window.innerHeight 
	            + "] :: dimen[" + dimen + "]");

	document.getElementById("main_content").innerHTML = 
									'<canvas id="canvas" width="' 
									+ dimen 
									+ '" height="' 
									+ dimen 
									+ '"></canvas>';

	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var radius = canvas.height / 2;
	ctx.translate(radius, radius);
	radius = radius * 0.90 ;

	drawClock(ctx, radius);

}

window.addEventListener("DOMContentLoaded", function() {

	// start the board with analog clock rather than a dummy page
	// without adding this classList here is make the clock to appear on the left initially and later moved to center
	document.getElementById("main_content").classList.add("analog-time");
	intervalId = setInterval(paintAnalog, 1000);

	// set the listeners
	document.getElementById("id_digital").addEventListener("click", function(){

		// make the current one not active
   		$("#navbarSupportedContent").find(".active").removeClass("active");

   		// make the pressed/new one as active
		$(this).addClass("active");

		if ( intervalId !== null ) clearInterval(intervalId);

		document.getElementById("main_content").classList.add("digital-time");

		intervalId = setInterval(paintDigital, 1000);
	});

	document.getElementById("id_analog").addEventListener("click", function(){
		
		// make the current one not active
   		$("#navbarSupportedContent").find(".active").removeClass("active");

   		// make the pressed/new one as active
		$(this).addClass("active");

		if ( intervalId !== null ) clearInterval(intervalId);

		document.getElementById("main_content").classList.add("analog-time");

		intervalId = setInterval(paintAnalog, 1000);
	} );

	document.getElementById("id_reverse").addEventListener("click", function(){

		// make the current one not active
   		$("#navbarSupportedContent").find(".active").removeClass("active");

   		// make the pressed/new one as active
		$(this).addClass("active");

		if ( intervalId !== null ) clearInterval(intervalId);
		intervalId = setInterval(paintReverseAnalog, 1000);
	} );


    }, false);

