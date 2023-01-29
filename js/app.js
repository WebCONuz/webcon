let navbar = document.querySelector('.navigation'),
	body = document.querySelector('body'),
	home = document.getElementById('home'),
	about = document.getElementById('about'),
	proces = document.getElementById('process'),
	direction = document.getElementById('direction'),
	galery = document.getElementById('galery'),
	mentor = document.getElementById('mentor'),
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

// GALERY section carousel slider ------------------------
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:2,
	            nav:false
	        },
	        1000:{
	            items:3,
	            nav:true,
	        }
	    }
	})
});

// MENTOR CONTACT ----------------------------------
let contactBox = document.querySelector('.contactBox');

function contactTelegram() {
    let con_a = document.querySelector('.contactBox > a');
    let telegram = document.createElement('a');
    telegram.innerHTML = '<span>Telegram: </span> @web_kurs_admin';
    telegram.classList.add('text-primay');
    telegram.href = '#';
    contactBox.removeChild(con_a);
    contactBox.appendChild(telegram);
}
function contactYoutube() {
    let con_a = document.querySelector('.contactBox > a');
    let youtube = document.createElement('a');
    youtube.innerHTML = '<span>YouTube: </span> Havaskor Dasturchilar';
    youtube.classList.add('text-primay');
    youtube.href = '#';
    contactBox.removeChild(con_a);
    contactBox.appendChild(youtube);
}
function contactInstagram(){
	let con_a = document.querySelector('.contactBox > a');
    let instagram = document.createElement('a');
    instagram.innerHTML = '<span>Ins: </span> Havaskor web Dasturchilar';
    instagram.classList.add('text-primay');
    instagram.href = '#';
    contactBox.removeChild(con_a);
    contactBox.appendChild(instagram);
}
function contactEnvelope() {
    let con_a = document.querySelector('.contactBox > a');
    let gmail = document.createElement('a');
    gmail.innerHTML = '<span>E: </span> muxammadi0799@gmail.com';
    gmail.classList.add('text-primay');
    gmail.href = '#';
    contactBox.removeChild(con_a);
    contactBox.appendChild(gmail);
}
function contactPhone() {
    let con_a = document.querySelector('.contactBox > a');
    let phone = document.createElement('a');
    phone.innerHTML = '<span>Tel: </span> +99 899 542 63 07';
    phone.classList.add('text-primay');
    phone.href = '#';
    contactBox.removeChild(con_a);
    contactBox.appendChild(phone);
}

// NIGHT MODE------------------------------
document.querySelector(".switch").addEventListener("click", function(){
	let sun = document.querySelector('.switch');
	body.classList.toggle('body-night');
	navbar.classList.toggle('nav-night');
	sun.classList.toggle('active');
	home.classList.toggle('home-night');
	about.classList.toggle('about-night');
	proces.classList.toggle('proces-night');
	direction.classList.toggle('direction-night');
	galery.classList.toggle('galery-night');
	mentor.classList.toggle('mentor-night');
	footer.classList.toggle('footer-night');
});