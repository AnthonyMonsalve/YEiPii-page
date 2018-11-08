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

	redes.classList.toggle('fa-chevron-down');

	if(app.classList.contains("fa-chevron-down")){
		app.classList.remove('fa-chevron-down');
		app.classList.add('fa-chevron-right');
	}
}


function footerAppDown (){
	let redes = document.getElementById('acordeon-redes');
	let app = document.getElementById('acordeon-app');
	
	app.classList.toggle('fa-chevron-down');

	if(redes.classList.contains("fa-chevron-down")){
		redes.classList.remove('fa-chevron-down');
		redes.classList.add('fa-chevron-right');
	}
}