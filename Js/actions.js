/*NAV ANIMACION*/
		window.onscroll = function(){
			AddOrRemove()
		};

		var Header = document.getElementById("header");
		Logo = document.getElementById("logo");
		/*var BurguerButton = document.getElementById("burguerButton");*/
		var Nav = document.getElementById("Nav");
		
		var HeaderPosition = Header.offsetTop;

		function AddOrRemove(){
			if(window.pageYOffset >= HeaderPosition){
				Header.classList.add("header-down");
				Logo.src="images/logo/YEiPii.png";/*
				BurguerButton.classList.add("burguer-blue");*/
				Nav.classList.add("nav-down");
			}
			else{
				Header.classList.remove("header-down");
				Logo.src="images/logo/YEiPii.png";/*
				BurguerButton.classList.remove("burguer-blue");*/
				Nav.classList.remove("nav-down");
			}
		}

/*SCROLL REVEAL*/
		// Changing the defaults
		window.sr = ScrollReveal({ reset: false });

		if(window.matchMedia( "(max-width: 840px)" ).matches){
			// Customizing a reveal set
			sr.reveal('.animate', { duration: 750, distance: '60px', origin: 'bottom', delay: 250 });
			sr.reveal('.animate.slow', { duration: 750, distance: '30px', origin: 'bottom', delay: 600 });
			
			sr.reveal('.animate-right', { duration: 750, distance: '60px', origin: 'bottom', delay: 250 });
			sr.reveal('.animate-right.slow', { duration: 750, distance: '30px', origin: 'bottom', delay: 600 });	
		}else{
			// Customizing a reveal set
			sr.reveal('.animate', { duration: 750, distance: '60px', origin: 'left', delay: 250 });
			sr.reveal('.animate.slow', { duration: 750, distance: '60px', origin: 'left', delay: 600 });
			sr.reveal('.animate.btn-slider', { duration: 800, distance: '60px', origin: 'bottom', delay: 450 });
			
			sr.reveal('.animate-right', { duration: 750, distance: '60px', origin: 'right', delay: 250 });
			sr.reveal('.animate-right.slow', { duration: 750, distance: '60px', origin: 'right', delay: 600 });			
		}


/* ACCIONES DEL MENU RESPONSIVE */

function menuResponsive (){
	document.getElementById('contentNav').classList.toggle('active');
	//document.getElementById('button-menu').classList.toggle('active');
	document.getElementById('button-menu').classList.toggle('is-active');
}

function footerRedesDown (){
	let redes = document.getElementById('acordeon-redes');
	let app = document.getElementById('acordeon-app');
	let ayuda = document.getElementById('acordeon-ayuda');

	redes.classList.toggle('fa-chevron-down');

	if(app.classList.contains("fa-chevron-down") || redes.classList.contains("fa-chevron-down")){
		app.classList.remove('fa-chevron-down');
		app.classList.add('fa-chevron-right');
		ayuda.classList.remove('fa-chevron-down');
		ayuda.classList.add('fa-chevron-right');
	}
}

function footerAyudaDown (){
	let redes = document.getElementById('acordeon-redes');
	let app = document.getElementById('acordeon-app');
	let ayuda = document.getElementById('acordeon-ayuda');

	ayuda.classList.toggle('fa-chevron-down');

	if(app.classList.contains("fa-chevron-down") || redes.classList.contains("fa-chevron-down")){
		app.classList.remove('fa-chevron-down');
		app.classList.add('fa-chevron-right');
		redes.classList.remove('fa-chevron-down');
		redes.classList.add('fa-chevron-right');
	}
}


function footerAppDown (){
	let redes = document.getElementById('acordeon-redes');
	let app = document.getElementById('acordeon-app');
	let ayuda = document.getElementById('acordeon-ayuda');
	
	app.classList.toggle('fa-chevron-down');

	if(redes.classList.contains("fa-chevron-down") || ayuda.classList.contains("fa-chevron-down")){
		redes.classList.remove('fa-chevron-down');
		redes.classList.add('fa-chevron-right');
		ayuda.classList.remove('fa-chevron-down');
		ayuda.classList.add('fa-chevron-right');
	}
}

/* CATEGORÍAS BUTTONS */

const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; 
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
});