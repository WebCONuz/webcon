let navbar = document.querySelector('.navigation'),
	body = document.querySelector('body'),
	home = document.getElementById('home'),
	card = document.querySelectorAll('#narx .card'),
	info = document.getElementById('info'),
	footer = document.getElementById('footer'),
	a = document.querySelectorAll(".menu > li > a");

// LOADEING PAGE -----------------
window.addEventListener("load", loading);
function loading(){
	let loader = document.querySelector(".loader");
	loader.style.cssText = "opacity: 0; visibility: hidden;";
}

// NAVBAR -------------------------
let barButton = document.querySelector('.bar-icon'),
	bar = document.querySelector('.bar-icon > span'),
	menu = document.querySelector('.menu');

window.addEventListener("scroll", function(){
    navbar.classList.toggle('fixed', window.scrollY > 0);
});

if(window.scrollY > 0){
	navbar.classList.add("fixed");
}

barButton.addEventListener("click", function(){
	menu.classList.toggle("toggle");
	navbar.classList.toggle("bg");
	if(!navbar.classList.contains('fixed')){
		navbar.style.backgroundColor = "#fff";
	}
	if(bar.classList.contains('fa-bars')){
		bar.classList.remove('fa-bars');
		bar.classList.add('fa-times');
	} else {
		bar.classList.add('fa-bars');
		bar.classList.remove('fa-times');
	}
});

a.forEach((item) => {
	item.addEventListener("click", () => {
		menu.classList.toggle("toggle");
		navbar.classList.toggle("bg");
		bar.classList.add('fa-bars');
		bar.classList.remove('fa-times');
	})
});

// NIGHT MODE ------------------------------
document.querySelector(".switch").addEventListener("click", function(){
	let sun = document.querySelector('.switch');
	body.classList.toggle('body-night');
	navbar.classList.toggle('nav-night');
	sun.classList.toggle('active');
	home.classList.toggle('home-night');
	tarif.classList.toggle('tarif-night');
	card.forEach((item) => {
		item.classList.toggle("card-night");
		item.classList.toggle("bg-light");
	});
	info.classList.toggle('info-night');
	footer.classList.toggle('footer-night');
});