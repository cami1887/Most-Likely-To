let btn = document.querySelector("reset");

function getWords() {
	const word = ['Commit A Crime', 'Get Scammed', 'Have A Coffee Addiction', 'Get Divorced', 'Acquire A Mental Illness', 'Get Catfished', 'Be On Reality TV', 'Spontaneously Combust', 'Join A Pyramid Scheme', 'Flee the Country'];
	let words = word[Math.floor(Math.random() * word.length)];
	let generatedWords = words;
	document.getElementById("output").innerHTML = generatedWords;
	console.log(generatedWords);
}

function openNav() {
	document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

function certificateOne() {
	document.querySelector(".whiteBackground").style.backgroundColor = "white";
	document.querySelector(".whiteBackground").style.borderStyle = "double";
	document.querySelector(".whiteBackground").style.borderColor = "rgb(224, 165, 0)";
}

function certificateTwo() {
	document.querySelector(".whiteBackground").style.backgroundColor = "#9b9b9b60";
	document.querySelector(".whiteBackground").style.borderStyle = "groove";
	document.querySelector(".whiteBackground").style.borderColor = "white";
}

function certificateThree() {
	document.querySelector(".whiteBackground").style.backgroundColor = "#eecd90a1";
	document.querySelector(".whiteBackground").style.borderStyle = "dashed";
	document.querySelector(".whiteBackground").style.borderColor = "white";
}

function certificateFour() {
	document.querySelector(".whiteBackground").style.backgroundColor = "#ffe8e8";
	document.querySelector(".whiteBackground").style.borderStyle = "dotted";
	document.querySelector(".whiteBackground").style.borderColor = "white";
}