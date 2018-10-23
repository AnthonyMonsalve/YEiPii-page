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
        

/*MODALLLLLL*/

$(document).ready(function(){
	$('#myBtn').click(function(event){
		showModal();
		event.stopPropagation(); 
	});
	$('#modalClose').click(function(){
		hideModal();
	});
	
	// Do nothing when clicking on the modal content
	$('.modal-content').click(function(event){
       event.stopPropagation(); 
    });
});

function showModal(){
	$('#myModal').fadeIn('slow');
		(function fun(){
			$('.modal-content').css({'transform':'translateY(0px)'});
			$('.modal').css({'display':'flex'});
		})();
}

function hideModal(){
	$('#myModal').fadeOut('fast');
		(function fun2(){
			$('.modal-content').css({ 'transform':'translateY(0px)' });
		})();
}



$(document).on("click", function () {
    //click outside of ".nav__dropdown" class itself and menu will be hidden
	hideModal();
});