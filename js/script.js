function getCurrentTime() {
	console.log("Entering into getCurrentTime");

	var currTime = new Date();

	console.log(currTime);

	return currTime;
}

function paintDigital() {
	console.log("Entering into paintDigital");
	currTime = getCurrentTime();
	document.getElementById("main_content").innerHTML = currTime.getHours() + ":" + currTime.getMinutes() + ":" + currTime.getSeconds();
}

function paintAnalog() {
	console.log("Entering into paintAnalog");
	currTime = getCurrentTime();
	document.getElementById("main_content").innerHTML = "Coming soon";
}

window.addEventListener("DOMContentLoaded", function() {
	document.getElementById("b_digital").addEventListener("click", function(){
		setInterval(paintDigital, 1000);
	} );
	document.getElementById("b_analog").addEventListener("click", function(){
		setInterval(paintAnalog, 1000);
	} );
    }, false);

