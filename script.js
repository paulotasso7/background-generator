var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#gradient");
var randomico = document.getElementById("aleatorio");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}


// function randomizar() {

// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ Math.floor(Math.random()*255);
// 	+ ", " 
// 	+ Math.floor(Math.random()*255);
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomico.addEventListener("onClick", randomizar);

css.textContent =  body.style.background.value + ";";

setGradient();
