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
				Logo.src="images/logo/YEiPii-inverse.fw.png";/*
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

		// Customizing a reveal set
		sr.reveal('.animate', { duration: 750, distance: '10rem', origin: 'bottom', delay: 250 });
		sr.reveal('.animate.slow', { duration: 750, distance: '10rem', origin: 'bottom', delay: 600 });
