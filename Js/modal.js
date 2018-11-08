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