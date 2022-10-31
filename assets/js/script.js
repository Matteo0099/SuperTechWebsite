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
		document.querySelector("#paragraph").classList.add("dark");
	} else {
		document.querySelector("body").classList.remove("dark");
		document.querySelector("#paragraph").classList.remove("dark");
	}
}

/**
 * Button on-click
**/
var ableToClick = true;
function buttonClick(){
  if(!ableToClick) return;
  ableToClick=false;
  
  let splash = document.getElementById("splash");
  splash.style.width="200px";
  splash.style.height="200px";
  
  setTimeout(function(){
    splash.style.opacity="0";
  }, 300);
  
  setTimeout(function(){
    splash.style.transitionDuration="0s";
  }, 800);
  
  setTimeout(function(){
    splash.style.width="0";
    splash.style.height="0";
    splash.style.opacity="1";
  }, 1000);
  
  setTimeout(function(){
    ableToClick = true;
    splash.style.transitionDuration=".5s";
  }, 1100);
}

/**
 * Animation Fade-in
 * with jquery e pure js
**/
document.querySelector(".show").addEventListener("click", function () {
	if (document.querySelector("section").className == "fade-in") {
		document.querySelector("section").classList.remove("fade-in");
	} else {
		document.querySelector("section").classList.add("fade-in");
	}
});


/**
 * mhhh
 * 
**/
! function() {
    "use strict";
    var c;
    "querySelector" in document && "addEventListener" in window && (c = document.querySelector(".generate-back-to-top"), c && (window.addEventListener("scroll", function() {
        var e = window.pageYOffset,
            t = c.getAttribute("data-start-scroll");
        t < e && c.classList.add("generate-back-to-top__show"), e < t && c.classList.remove("generate-back-to-top__show")
    }), c.addEventListener("click", function(e) {
        var t, o, n, a, r;
        e.preventDefault(), generatepressBackToTop.smooth ? (document.body, t = c.getAttribute("data-scroll-speed") || 400, e = window.pageYOffset, o = document.body.offsetTop, n = (o - e) / (t / 16), a = function() {
            window.pageYOffset <= (o || 0) && (clearInterval(r), document.activeElement.blur())
        }, r = setInterval(function() {
            window.scrollBy(0, n), a()
        }, 16)) : window.scrollTo(0, 0)
    }, !1)))
}();
