const mostLikelys = ['Commit A Crime', 'Get Scammed', 'Have A Coffee Addiction', 'Get Divorced', 'Acquire A Mental Illness', 'Get Catfished', 'Be On Reality TV', 'Spontaneously Combust', 'Join A Pyramid Scheme', 'Flee the Country'];

function getWords() {
	let randomOutput = mostLikelys[Math.floor(Math.random() * mostLikelys.length)];
	document.getElementById("output").innerHTML = randomOutput;
}

function openNavigation() { // I attempted to combine open/close into one function, but the buttons would still appear after closing the navigation bar. I assume its because the styling was the only thing being removed. I decided to keep it two functions so I don't add more code anywhere else.
	document.getElementById("mySidenavigation").style.width = "350px";
}

function closeNavigation() {
	document.getElementById("mySidenavigation").style.width = "0";
}

function updateContainer(theme) {
	const container = document.getElementById('certificate-container');
	
	if (theme === 'light-theme') {
		container.classList.remove('dark-theme');
		container.classList.remove('gold-theme');
		container.classList.remove('pink-theme');
	}
	if (theme === 'dark-theme') {
		container.classList.add('dark-theme');
		container.classList.remove('gold-theme');
		container.classList.remove('pink-theme');
	}
	if (theme === 'gold-theme') {
		container.classList.add('gold-theme');
		container.classList.remove('dark-theme');
		container.classList.remove('pink-theme');
	}
	if (theme === 'pink-theme') {
		container.classList.add('pink-theme');
		container.classList.remove('dark-theme');
		container.classList.remove('gold-theme');
	}
}