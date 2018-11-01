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


/*CAMBIAR IMAGEN DE DOWNLOAD 'GET IT ON'*/

window.onload = function(){
    var imagenAndroid = document.getElementById("getiton-android");
    imagenAndroid.addEventListener('mouseover',cambiarImagenAndroid);
    imagenAndroid.addEventListener('mouseout',imagenAndroidIniciar);
    
    function cambiarImagenAndroid(){
        this.setAttribute('src','images/download/store_an_blue.svg');    
    }
    
    function imagenAndroidIniciar(){
        this.setAttribute('src',"images/download/store_an_white.svg");
    }

	var imagenIos = document.getElementById("getiton-ios");
    imagenIos.addEventListener('mouseover',cambiarImagenIos);
    imagenIos.addEventListener('mouseout',imagenIosIniciar);
    
    function cambiarImagenIos(){
        this.setAttribute('src','images/download/store_ap_blue.svg');    
    }
    
    function imagenIosIniciar(){
        this.setAttribute('src',"images/download/store_ap_white.svg");
    }
}   

/*SCROLL REVEAL*/
		// Changing the defaults
		window.sr = ScrollReveal({ reset: false });

		// Customizing a reveal set
		sr.reveal('.animate', { duration: 750, distance: '60px', origin: 'left', delay: 250 });
		sr.reveal('.animate.slow', { duration: 750, distance: '60px', origin: 'left', delay: 600 });
		
		sr.reveal('.animate-right', { duration: 750, distance: '60px', origin: 'right', delay: 250 });
		sr.reveal('.animate-right.slow', { duration: 750, distance: '60px', origin: 'right', delay: 600 });
		
        

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


/* ACCIONES DEL MENU RESPONSIVE */

function menuResponsive (){
	document.getElementById('contentNav').classList.toggle('active');
	document.getElementById('button-menu').classList.toggle('active');
}
