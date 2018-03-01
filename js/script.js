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

	document.getElementById("main_content").innerHTML = '<canvas id="canvas" width="400" height="400"></canvas>';
	
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var radius = canvas.height / 2;
	ctx.translate(radius, radius);
	radius = radius * 0.90 ;

	drawClock(ctx, radius);

}

window.addEventListener("DOMContentLoaded", function() {

	// start the board with analog clock rather than a dummy page
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

