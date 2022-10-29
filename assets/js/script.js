function nav() {
	//console.log("Open nav");
    document.getElementById("nav").classList.toggle("nav-full");
	document.getElementById("hamburger").classList.toggle("turned");
	document.getElementById("one").classList.toggle("turned-one");
	document.getElementById("two").classList.toggle("turned-two");   
}

function darkMode() {
	if (document.querySelector("body").className != "dark") {
		document.querySelector("body").classList.add("dark");
	} else {
		document.querySelector("body").classList.remove("dark");
	}
}
