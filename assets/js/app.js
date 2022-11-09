/****** first card *******/
//Movement Animation to happean  
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Items  
const title = document.querySelector(".title");
const sneaker = document.querySelector("span");
const purchase = document.querySelector("p");

//Moving Animation Event  
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 21;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 21;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In  
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout  
    title.style.transform = "translateZ(0px)";
});

//Animate Out  
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.8s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback  
    title.style.transform = "translateZ(0px)";
});
/******* end first card ********/

/******* second card ********/
const cardAbout = document.querySelector(".card-about");
const containerAbout = document.querySelector(".container-about");
const titleAbout = document.querySelector(".title-about");

containerAbout.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 32;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 32;
    cardAbout.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

containerAbout.addEventListener("mouseenter", (e) => {
    cardAbout.style.transition = "none";
    //Popout  
    titleAbout.style.transform = "translateZ(0px)";
});

//Animate Out  
containerAbout.addEventListener("mouseleave", (e) => {
    cardAbout.style.transition = "all 0.8s ease";
    cardAbout.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback  
    titleAbout.style.transform = "translateZ(0px)";
});
/******* end second card *******/

