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
