const mostLikelys = ['Commit A Crime', 'Get Scammed', 'Have A Coffee Addiction', 'Get Divorced', 'Acquire A Mental Illness', 'Get Catfished', 'Be On Reality TV', 'Spontaneously Combust', 'Join A Pyramid Scheme', 'Flee the Country'];

function getWords() {
	let randomOutput = mostLikelys[Math.floor(Math.random() * mostLikelys.length)];
	document.getElementById("output").innerHTML = randomOutput;
}

function openNav() {
	document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

function certificateOne() {
	document.querySelector(".cert-background").style.backgroundColor = "white";
	document.querySelector(".cert-background").style.borderStyle = "double";
	document.querySelector(".cert-background").style.borderColor = "rgb(224, 165, 0)";
}

function certificateTwo() {
	document.querySelector(".cert-background").style.backgroundColor = "#9b9b9b60";
	document.querySelector(".cert-background").style.borderStyle = "groove";
	document.querySelector(".cert-background").style.borderColor = "white";
}

function certificateThree() {
	document.querySelector(".cert-background").style.backgroundColor = "#eecd90a1";
	document.querySelector(".cert-background").style.borderStyle = "dashed";
	document.querySelector(".cert-background").style.borderColor = "white";
}

function certificateFour() {
	document.querySelector(".cert-background").style.backgroundColor = "#ffe8e8";
	document.querySelector(".cert-background").style.borderStyle = "dotted";
	document.querySelector(".cert-background").style.borderColor = "white";
}