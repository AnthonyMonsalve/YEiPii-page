const Universidades = document.getElementById('BtnUniversidades');
const Restaurantes = document.getElementById('BtnRestaurantes');
const Estacionamientos = document.getElementById('BtnEstacionamientos');
const Discotecas = document.getElementById('BtnDiscotecas');
const Licorerias = document.getElementById('BtnLicorerias');
const Clubes = document.getElementById('BtnClubes');
const categoryBox = document.getElementsByClassName('categoryBox');



Universidades.onclick = function () {
    let categoryBoxe = categoryBox[0];
    let Circulos = categoryBoxe.getElementsByClassName('lugarCategory');

    if (window.matchMedia("(min-width: 1054px)").matches) {
        if(Universidades.style.opacity == .6){
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0; 
                categoryBox[index].classList.remove('categoryOpen');

                Restaurantes.classList.remove('button-gray-disabled');
                Estacionamientos.classList.remove('button-gray-disabled');
                Universidades.classList.remove('button-gray-disabled');
                Discotecas.classList.remove('button-gray-disabled');
                Licorerias.classList.remove('button-gray-disabled');
                Clubes.classList.remove('button-gray-disabled');       
            }
        }
        categoryBoxe.classList.toggle('categoryOpen');
        let cuantasFilas = Math.ceil(Circulos.length / 6);
        let heightBox = (187 * cuantasFilas) + 12.5 + 'px';

        if (categoryBoxe.style.height == heightBox) {
            categoryBoxe.style.height = 0;
            categoryBoxe.style.opacity = 0;
            Restaurantes.style.opacity = 1;
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.style.opacity = 1;
            Estacionamientos.classList.remove('button-gray-disabled');
            Discotecas.style.opacity = 1;
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.style.opacity = 1;
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.style.opacity = 1;
            Clubes.classList.remove('button-gray-disabled');
        } else {
            categoryBoxe.style.height = heightBox;
            Restaurantes.style.opacity = .6;
            Restaurantes.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = .6;
            Estacionamientos.classList.add('button-gray-disabled');
            Discotecas.style.opacity = .6;
            Discotecas.classList.add('button-gray-disabled');
            Licorerias.style.opacity = .6;
            Licorerias.classList.add('button-gray-disabled');
            Clubes.style.opacity = .6;
            Clubes.classList.add('button-gray-disabled');
            Universidades.style.opacity = 1;
            setTimeout(function () {
                categoryBoxe.style.opacity = 1;
            }, 200);
        }
    } else if (window.matchMedia("(min-width: 578px)").matches) {
        //añadiendo espacio para que aparezca el contenido entre las 2 filas
        categoryBoxe.classList.toggle('categoryOpen-2filas');
        if (window.matchMedia("(max-width: 693px)").matches) {
            var cuantasFilas = Math.ceil(Circulos.length / 3);
        } else if (window.matchMedia("(max-width: 693px)").matches) {
            var cuantasFilas = Math.ceil(Circulos.length / 3);
        } else if (window.matchMedia("(max-width: 866px)").matches) {
            var cuantasFilas = Math.ceil(Circulos.length / 4);
        } else {
            var cuantasFilas = Math.ceil(Circulos.length / 5);
        }
        let heightBox = (180 * cuantasFilas) + 50 + 'px';
        let marginBox = (180 * cuantasFilas) + 50 + 30 + 'px';

        if (categoryBoxe.style.height == heightBox) {

            Universidades.style.marginBottom = 0;
            Restaurantes.style.marginBottom = 0;
            Estacionamientos.style.marginBottom = 0;

            categoryBoxe.style.height = 0;
            categoryBoxe.style.opacity = 0;
            Restaurantes.style.opacity = 1;
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.style.opacity = 1;
            Estacionamientos.classList.remove('button-gray-disabled');
            Discotecas.style.opacity = 1;
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.style.opacity = 1;
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.style.opacity = 1;
            Clubes.classList.remove('button-gray-disabled');
        } else {
            Universidades.style.marginBottom = marginBox;
            Restaurantes.style.marginBottom = marginBox;
            Estacionamientos.style.marginBottom = marginBox;

            categoryBoxe.style.height = heightBox;
            Restaurantes.style.opacity = .6;
            Restaurantes.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = .6;
            Estacionamientos.classList.add('button-gray-disabled');
            Discotecas.style.opacity = .6;
            Discotecas.classList.add('button-gray-disabled');
            Licorerias.style.opacity = .6;
            Licorerias.classList.add('button-gray-disabled');
            Clubes.style.opacity = .6;
            Clubes.classList.add('button-gray-disabled');
            Universidades.style.opacity = 1;
            setTimeout(function () {
                categoryBoxe.style.opacity = 1;
            }, 200);
        }

    } else if (window.matchMedia("(min-width: 359px)").matches) {

        categoryBoxe.classList.toggle('categoryOpen-3filas');
        var cuantasFilas = Math.ceil(Circulos.length / 3);
        let heightBox = (160 * cuantasFilas) + 30 + 'px';
        let marginBox = (160 * cuantasFilas) + 30 + 30 + 'px';

        if (categoryBoxe.style.height == heightBox) {

            Universidades.style.marginBottom = 0;
            Restaurantes.style.marginBottom = 0;

            categoryBoxe.style.height = 0;
            categoryBoxe.style.opacity = 0;
            Restaurantes.style.opacity = 1;
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.style.opacity = 1;
            Estacionamientos.classList.remove('button-gray-disabled');
            Discotecas.style.opacity = 1;
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.style.opacity = 1;
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.style.opacity = 1;
            Clubes.classList.remove('button-gray-disabled');
        } else {
            Universidades.style.marginBottom = marginBox;
            Restaurantes.style.marginBottom = marginBox;

            categoryBoxe.style.height = heightBox;
            Restaurantes.style.opacity = .6;
            Restaurantes.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = .6;
            Estacionamientos.classList.add('button-gray-disabled');
            Discotecas.style.opacity = .6;
            Discotecas.classList.add('button-gray-disabled');
            Licorerias.style.opacity = .6;
            Licorerias.classList.add('button-gray-disabled');
            Clubes.style.opacity = .6;
            Clubes.classList.add('button-gray-disabled');
            Universidades.style.opacity = 1;
            setTimeout(function () {
                categoryBoxe.style.opacity = 1;
            }, 200);
        }
    } else {
        categoryBoxe.classList.toggle('categoryOpen-individual');
        var cuantasFilas = Math.ceil(Circulos.length / 2);
        let heightBox = (160 * cuantasFilas) + 30 + 'px';
        let marginBox = (160 * cuantasFilas) + 30 + 30 + 'px';

        if (categoryBoxe.style.height == heightBox) {

            Universidades.style.marginBottom = 0;

            categoryBoxe.style.height = 0;
            categoryBoxe.style.opacity = 0;
            Restaurantes.style.opacity = 1;
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.style.opacity = 1;
            Estacionamientos.classList.remove('button-gray-disabled');
            Discotecas.style.opacity = 1;
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.style.opacity = 1;
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.style.opacity = 1;
            Clubes.classList.remove('button-gray-disabled');
        } else {
            Universidades.style.marginBottom = marginBox;

            categoryBoxe.style.height = heightBox;
            Restaurantes.style.opacity = .6;
            Restaurantes.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = .6;
            Estacionamientos.classList.add('button-gray-disabled');
            Discotecas.style.opacity = .6;
            Discotecas.classList.add('button-gray-disabled');
            Licorerias.style.opacity = .6;
            Licorerias.classList.add('button-gray-disabled');
            Clubes.style.opacity = .6;
            Clubes.classList.add('button-gray-disabled');
            Universidades.style.opacity = 1;
            setTimeout(function () {
                categoryBoxe.style.opacity = 1;
            }, 200);
        }

    }
};

Restaurantes.onclick = function () {
    let categoryBoxe = categoryBox[1];
    let Circulos = categoryBoxe.getElementsByClassName('lugarCategory');

    if (window.matchMedia("(min-width: 1054px)").matches) {
        if(Restaurantes.style.opacity == .6){
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0; 
                categoryBox[index].classList.remove('categoryOpen');
                Restaurantes.classList.remove('button-gray-disabled');
                Estacionamientos.classList.remove('button-gray-disabled');
                Universidades.classList.remove('button-gray-disabled');
                Discotecas.classList.remove('button-gray-disabled');
                Licorerias.classList.remove('button-gray-disabled');
                Clubes.classList.remove('button-gray-disabled');                  
            }
        }
        categoryBoxe.classList.toggle('categoryOpen');
        let cuantasFilas = Math.ceil(Circulos.length / 6);
        let heightBox = (187 * cuantasFilas) + 12.5 + 'px';

        if (categoryBoxe.style.height == heightBox) {
            categoryBoxe.style.height = 0;
            categoryBoxe.style.opacity = 0;
            Universidades.style.opacity = 1;
            Universidades.classList.remove('button-gray-disabled');
            Estacionamientos.style.opacity = 1;
            Estacionamientos.classList.remove('button-gray-disabled');
            Discotecas.style.opacity = 1;
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.style.opacity = 1;
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.style.opacity = 1;
            Clubes.classList.remove('button-gray-disabled');
        } else {
            categoryBoxe.style.height = heightBox;
            Universidades.style.opacity = .6;
            Universidades.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = .6;
            Estacionamientos.classList.add('button-gray-disabled');
            Discotecas.style.opacity = .6;
            Discotecas.classList.add('button-gray-disabled');
            Licorerias.style.opacity = .6;
            Licorerias.classList.add('button-gray-disabled');
            Clubes.style.opacity = .6;
            Clubes.classList.add('button-gray-disabled');
            Restaurantes.style.opacity = 1;
            setTimeout(function () {
                categoryBoxe.style.opacity = 1;
            }, 200);
        }
    } else if (window.matchMedia("(min-width: 578px)").matches) {
        //añadiendo espacio para que aparezca el contenido entre las 2 filas
        categoryBoxe.classList.toggle('categoryOpen-2filas');
        if (window.matchMedia("(max-width: 693px)").matches) {
            var cuantasFilas = Math.ceil(Circulos.length / 3);
        } else if (window.matchMedia("(max-width: 866px)").matches) {
            var cuantasFilas = Math.ceil(Circulos.length / 4);
        } else {
            var cuantasFilas = Math.ceil(Circulos.length / 5);
        }
        let heightBox = (180 * cuantasFilas) + 50 + 'px';
        let marginBox = (180 * cuantasFilas) + 50 + 30 + 'px';

        if (categoryBoxe.style.height == heightBox) {

            Restaurantes.style.marginBottom = 0;
            Universidades.style.marginBottom = 0;
            Estacionamientos.style.marginBottom = 0;

            categoryBoxe.style.height = 0;
            categoryBoxe.style.opacity = 0;
            Universidades.style.opacity = 1;
            Universidades.classList.remove('button-gray-disabled');
            Estacionamientos.style.opacity = 1;
            Estacionamientos.classList.remove('button-gray-disabled');
            Discotecas.style.opacity = 1;
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.style.opacity = 1;
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.style.opacity = 1;
            Clubes.classList.remove('button-gray-disabled');
        } else {
            Restaurantes.style.marginBottom = marginBox;
            Universidades.style.marginBottom = marginBox;
            Estacionamientos.style.marginBottom = marginBox;

            categoryBoxe.style.height = heightBox;
            Universidades.style.opacity = .6;
            Universidades.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = .6;
            Estacionamientos.classList.add('button-gray-disabled');
            Discotecas.style.opacity = .6;
            Discotecas.classList.add('button-gray-disabled');
            Licorerias.style.opacity = .6;
            Licorerias.classList.add('button-gray-disabled');
            Clubes.style.opacity = .6;
            Clubes.classList.add('button-gray-disabled');
            Restaurantes.style.opacity = 1;
            setTimeout(function () {
                categoryBoxe.style.opacity = 1;
            }, 200);
        }

    } else if (window.matchMedia("(min-width: 359px)").matches) {

        categoryBoxe.classList.toggle('categoryOpen-3filas');
        var cuantasFilas = Math.ceil(Circulos.length / 3);
        let heightBox = (160 * cuantasFilas) + 30 + 'px';
        let marginBox = (160 * cuantasFilas) + 30 + 30 + 'px';

        if (categoryBoxe.style.height == heightBox) {

            Universidades.style.marginBottom = 0;
            Restaurantes.style.marginBottom = 0;

            categoryBoxe.style.height = 0;
            categoryBoxe.style.opacity = 0;
            Universidades.style.opacity = 1;
            Universidades.classList.remove('button-gray-disabled');
            Estacionamientos.style.opacity = 1;
            Estacionamientos.classList.remove('button-gray-disabled');
            Discotecas.style.opacity = 1;
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.style.opacity = 1;
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.style.opacity = 1;
            Clubes.classList.remove('button-gray-disabled');
        } else {
            Universidades.style.marginBottom = marginBox;
            Restaurantes.style.marginBottom = marginBox;

            categoryBoxe.style.height = heightBox;
            Universidades.style.opacity = .6;
            Universidades.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = .6;
            Estacionamientos.classList.add('button-gray-disabled');
            Discotecas.style.opacity = .6;
            Discotecas.classList.add('button-gray-disabled');
            Licorerias.style.opacity = .6;
            Licorerias.classList.add('button-gray-disabled');
            Clubes.style.opacity = .6;
            Clubes.classList.add('button-gray-disabled');
            Restaurantes.style.opacity = 1;
            setTimeout(function () {
                categoryBoxe.style.opacity = 1;
            }, 200);
        }
    }else {
        categoryBoxe.classList.toggle('categoryOpen-individual-2');
        var cuantasFilas = Math.ceil(Circulos.length / 2);
        let heightBox = (160 * cuantasFilas) + 30 + 'px';
        let marginBox = (160 * cuantasFilas) + 30 + 30 + 'px';

        if (categoryBoxe.style.height == heightBox) {

            Restaurantes.style.marginBottom = 0;

            categoryBoxe.style.height = 0;
            categoryBoxe.style.opacity = 0;
            Universidades.style.opacity = 1;
            Universidades.classList.remove('button-gray-disabled');
            Estacionamientos.style.opacity = 1;
            Estacionamientos.classList.remove('button-gray-disabled');
            Discotecas.style.opacity = 1;
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.style.opacity = 1;
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.style.opacity = 1;
            Clubes.classList.remove('button-gray-disabled');
        } else {
            Restaurantes.style.marginBottom = marginBox;

            categoryBoxe.style.height = heightBox;
            Universidades.style.opacity = .6;
            Universidades.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = .6;
            Estacionamientos.classList.add('button-gray-disabled');
            Discotecas.style.opacity = .6;
            Discotecas.classList.add('button-gray-disabled');
            Licorerias.style.opacity = .6;
            Licorerias.classList.add('button-gray-disabled');
            Clubes.style.opacity = .6;
            Clubes.classList.add('button-gray-disabled');
            Restaurantes.style.opacity = 1;
            setTimeout(function () {
                categoryBoxe.style.opacity = 1;
            }, 200);
        }

    }
};

Estacionamientos.onclick = function () {
    let categoryBoxe = categoryBox[2];
    let Circulos = categoryBoxe.getElementsByClassName('lugarCategory');

    if (window.matchMedia("(min-width: 1054px)").matches) {

        if(Estacionamientos.style.opacity == .6){
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0; 
                categoryBox[index].classList.remove('categoryOpen');

                Restaurantes.classList.remove('button-gray-disabled');
                Estacionamientos.classList.remove('button-gray-disabled');
                Universidades.classList.remove('button-gray-disabled');
                Discotecas.classList.remove('button-gray-disabled');
                Licorerias.classList.remove('button-gray-disabled');
                Clubes.classList.remove('button-gray-disabled');       
            }
        }

        categoryBoxe.classList.toggle('categoryOpen');
        let cuantasFilas = Math.ceil(Circulos.length / 6);
        let heightBox = (187 * cuantasFilas) + 12.5 + 'px';

        if (categoryBoxe.style.height == heightBox) {
            categoryBoxe.style.height = 0;
            categoryBoxe.style.opacity = 0;
            Universidades.style.opacity = 1;
            Universidades.classList.remove('button-gray-disabled');
            Restaurantes.style.opacity = 1;
            Restaurantes.classList.remove('button-gray-disabled');
            Discotecas.style.opacity = 1;
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.style.opacity = 1;
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.style.opacity = 1;
            Clubes.classList.remove('button-gray-disabled');
        } else {
            categoryBoxe.style.height = heightBox;
            Universidades.style.opacity = .6;
            Universidades.classList.add('button-gray-disabled');
            Restaurantes.style.opacity = .6;
            Restaurantes.classList.add('button-gray-disabled');
            Discotecas.style.opacity = .6;
            Discotecas.classList.add('button-gray-disabled');
            Licorerias.style.opacity = .6;
            Licorerias.classList.add('button-gray-disabled');
            Clubes.style.opacity = .6;
            Clubes.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = 1;
            setTimeout(function () {
                categoryBoxe.style.opacity = 1;
            }, 200);
        }
    } else if (window.matchMedia("(min-width: 578px)").matches) {
        //añadiendo espacio para que aparezca el contenido entre las 2 filas
        categoryBoxe.classList.toggle('categoryOpen-2filas');
        if (window.matchMedia("(max-width: 693px)").matches) {
            var cuantasFilas = Math.ceil(Circulos.length / 3);
        } else if (window.matchMedia("(max-width: 866px)").matches) {
            var cuantasFilas = Math.ceil(Circulos.length / 4);
        } else {
            var cuantasFilas = Math.ceil(Circulos.length / 5);
        }
        let heightBox = (180 * cuantasFilas) + 50 + 'px';
        let marginBox = (180 * cuantasFilas) + 50 + 30 + 'px';

        if (categoryBoxe.style.height == heightBox) {

            Estacionamientos.style.marginBottom = 0;
            Universidades.style.marginBottom = 0;
            Restaurantes.style.marginBottom = 0;

            categoryBoxe.style.height = 0;
            categoryBoxe.style.opacity = 0;
            Universidades.style.opacity = 1;
            Universidades.classList.remove('button-gray-disabled');
            Restaurantes.style.opacity = 1;
            Restaurantes.classList.remove('button-gray-disabled');
            Discotecas.style.opacity = 1;
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.style.opacity = 1;
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.style.opacity = 1;
            Clubes.classList.remove('button-gray-disabled');
        } else {
            Estacionamientos.style.marginBottom = marginBox;
            Universidades.style.marginBottom = marginBox;
            Restaurantes.style.marginBottom = marginBox;

            categoryBoxe.style.height = heightBox;
            Universidades.style.opacity = .6;
            Universidades.classList.add('button-gray-disabled');
            Restaurantes.style.opacity = .6;
            Restaurantes.classList.add('button-gray-disabled');
            Discotecas.style.opacity = .6;
            Discotecas.classList.add('button-gray-disabled');
            Licorerias.style.opacity = .6;
            Licorerias.classList.add('button-gray-disabled');
            Clubes.style.opacity = .6;
            Clubes.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = 1;
            setTimeout(function () {
                categoryBoxe.style.opacity = 1;
            }, 200);
        }

    } else if (window.matchMedia("(min-width: 359px)").matches) {

        categoryBoxe.classList.toggle('categoryOpen-3filas-2da');
        var cuantasFilas = Math.ceil(Circulos.length / 3);
        let heightBox = (160 * cuantasFilas) + 30 + 'px';
        let marginBox = (160 * cuantasFilas) + 30 + 30 + 'px';

        if (categoryBoxe.style.height == heightBox) {

            Estacionamientos.style.marginBottom = 0;
            Discotecas.style.marginBottom = 0;

            categoryBoxe.style.height = 0;
            categoryBoxe.style.opacity = 0;
            Universidades.style.opacity = 1;
            Universidades.classList.remove('button-gray-disabled');
            Restaurantes.style.opacity = 1;
            Restaurantes.classList.remove('button-gray-disabled');
            Discotecas.style.opacity = 1;
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.style.opacity = 1;
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.style.opacity = 1;
            Clubes.classList.remove('button-gray-disabled');
        } else {
            Estacionamientos.style.marginBottom = marginBox;
            Discotecas.style.marginBottom = marginBox;

            categoryBoxe.style.height = heightBox;
            Universidades.style.opacity = .6;
            Universidades.classList.add('button-gray-disabled');
            Restaurantes.style.opacity = .6;
            Restaurantes.classList.add('button-gray-disabled');
            Discotecas.style.opacity = .6;
            Discotecas.classList.add('button-gray-disabled');
            Licorerias.style.opacity = .6;
            Licorerias.classList.add('button-gray-disabled');
            Clubes.style.opacity = .6;
            Clubes.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = 1;
            setTimeout(function () {
                categoryBoxe.style.opacity = 1;
            }, 200);
        }
    }else {
        categoryBoxe.classList.toggle('categoryOpen-individual-3');
        var cuantasFilas = Math.ceil(Circulos.length / 2);
        let heightBox = (160 * cuantasFilas) + 30 + 'px';
        let marginBox = (160 * cuantasFilas) + 30 + 30 + 'px';

        if (categoryBoxe.style.height == heightBox) {

            Estacionamientos.style.marginBottom = 0;

            categoryBoxe.style.height = 0;
            categoryBoxe.style.opacity = 0;
            Universidades.style.opacity = 1;
            Universidades.classList.remove('button-gray-disabled');
            Restaurantes.style.opacity = 1;
            Restaurantes.classList.remove('button-gray-disabled');
            Discotecas.style.opacity = 1;
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.style.opacity = 1;
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.style.opacity = 1;
            Clubes.classList.remove('button-gray-disabled');
        } else {
            Estacionamientos.style.marginBottom = marginBox;

            categoryBoxe.style.height = heightBox;
            Universidades.style.opacity = .6;
            Universidades.classList.add('button-gray-disabled');
            Restaurantes.style.opacity = .6;
            Restaurantes.classList.add('button-gray-disabled');
            Discotecas.style.opacity = .6;
            Discotecas.classList.add('button-gray-disabled');
            Licorerias.style.opacity = .6;
            Licorerias.classList.add('button-gray-disabled');
            Clubes.style.opacity = .6;
            Clubes.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = 1;
            setTimeout(function () {
                categoryBoxe.style.opacity = 1;
            }, 200);
        }

    }
};

Discotecas.onclick = function () {
    let categoryBoxe = categoryBox[3];
    let Circulos = categoryBoxe.getElementsByClassName('lugarCategory');

    if (window.matchMedia("(min-width: 1054px)").matches) {

        if(Discotecas.style.opacity == .6){
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0; 
                categoryBox[index].classList.remove('categoryOpen');

                Restaurantes.classList.remove('button-gray-disabled');
                Estacionamientos.classList.remove('button-gray-disabled');
                Universidades.classList.remove('button-gray-disabled');
                Discotecas.classList.remove('button-gray-disabled');
                Licorerias.classList.remove('button-gray-disabled');
                Clubes.classList.remove('button-gray-disabled');       
            }
        }

        categoryBoxe.classList.toggle('categoryOpen');
        let cuantasFilas = Math.ceil(Circulos.length / 6);
        let heightBox = (187 * cuantasFilas) + 12.5 + 'px';

        if (categoryBoxe.style.height == heightBox) {
            categoryBoxe.style.height = 0;
            categoryBoxe.style.opacity = 0;
            Restaurantes.style.opacity = 1;
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.style.opacity = 1;
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.style.opacity = 1;
            Universidades.classList.remove('button-gray-disabled');
            Licorerias.style.opacity = 1;
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.style.opacity = 1;
            Clubes.classList.remove('button-gray-disabled');
        } else {
            categoryBoxe.style.height = heightBox;
            Restaurantes.style.opacity = .6;
            Restaurantes.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = .6;
            Estacionamientos.classList.add('button-gray-disabled');
            Universidades.style.opacity = .6;
            Universidades.classList.add('button-gray-disabled');
            Licorerias.style.opacity = .6;
            Licorerias.classList.add('button-gray-disabled');
            Clubes.style.opacity = .6;
            Clubes.classList.add('button-gray-disabled');
            Discotecas.style.opacity = 1;
            setTimeout(function () {
                categoryBoxe.style.opacity = 1;
            }, 200);
        }
    } else if (window.matchMedia("(min-width: 578px)").matches) {
        //añadiendo espacio para que aparezca el contenido entre las 2 filas
        categoryBoxe.classList.toggle('categoryOpen-2filas-abajo');
        if (window.matchMedia("(max-width: 693px)").matches) {
            var cuantasFilas = Math.ceil(Circulos.length / 3);
        } else if (window.matchMedia("(max-width: 866px)").matches) {
            var cuantasFilas = Math.ceil(Circulos.length / 4);
        } else {
            var cuantasFilas = Math.ceil(Circulos.length / 5);
        }
        let heightBox = (140 * cuantasFilas) + 60 + 'px';
        let marginBox = (140 * cuantasFilas) + 60 + 30 + 'px';

        if (categoryBoxe.style.height == heightBox) {

            Discotecas.style.marginBottom = 0;
            Licorerias.style.marginBottom = 0;
            Clubes.style.marginBottom = 0;

            categoryBoxe.style.height = 0;
            categoryBoxe.style.opacity = 0;
            Restaurantes.style.opacity = 1;
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.style.opacity = 1;
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.style.opacity = 1;
            Universidades.classList.remove('button-gray-disabled');
            Licorerias.style.opacity = 1;
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.style.opacity = 1;
            Clubes.classList.remove('button-gray-disabled');
        } else {
            Discotecas.style.marginBottom = marginBox;
            Licorerias.style.marginBottom = marginBox;
            Clubes.style.marginBottom = marginBox;

            categoryBoxe.style.height = heightBox;
            Restaurantes.style.opacity = .6;
            Restaurantes.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = .6;
            Estacionamientos.classList.add('button-gray-disabled');
            Universidades.style.opacity = .6;
            Universidades.classList.add('button-gray-disabled');
            Licorerias.style.opacity = .6;
            Licorerias.classList.add('button-gray-disabled');
            Clubes.style.opacity = .6;
            Clubes.classList.add('button-gray-disabled');
            Discotecas.style.opacity = 1;
            setTimeout(function () {
                categoryBoxe.style.opacity = 1;
            }, 200);
        }

    } else if (window.matchMedia("(min-width: 359px)").matches) {

        categoryBoxe.classList.toggle('categoryOpen-3filas-2da');
        var cuantasFilas = Math.ceil(Circulos.length / 3);
        let heightBox = (160 * cuantasFilas) + 30 + 'px';
        let marginBox = (160 * cuantasFilas) + 30 + 30 + 'px';

        if (categoryBoxe.style.height == heightBox) {

            Estacionamientos.style.marginBottom = 0;
            Discotecas.style.marginBottom = 0;

            categoryBoxe.style.height = 0;
            categoryBoxe.style.opacity = 0;
            Universidades.style.opacity = 1;
            Universidades.classList.remove('button-gray-disabled');
            Restaurantes.style.opacity = 1;
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.style.opacity = 1;
            Estacionamientos.classList.remove('button-gray-disabled');
            Licorerias.style.opacity = 1;
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.style.opacity = 1;
            Clubes.classList.remove('button-gray-disabled');
        } else {
            Estacionamientos.style.marginBottom = marginBox;
            Discotecas.style.marginBottom = marginBox;

            categoryBoxe.style.height = heightBox;
            Universidades.style.opacity = .6;
            Universidades.classList.add('button-gray-disabled');
            Restaurantes.style.opacity = .6;
            Restaurantes.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = .6;
            Estacionamientos.classList.add('button-gray-disabled');
            Licorerias.style.opacity = .6;
            Licorerias.classList.add('button-gray-disabled');
            Clubes.style.opacity = .6;
            Clubes.classList.add('button-gray-disabled');
            Discotecas.style.opacity = 1;
            setTimeout(function () {
                categoryBoxe.style.opacity = 1;
            }, 200);
        }
    }else {
        categoryBoxe.classList.toggle('categoryOpen-individual-4');
        var cuantasFilas = Math.ceil(Circulos.length / 2);
        let heightBox = (160 * cuantasFilas) + 30 + 'px';
        let marginBox = (160 * cuantasFilas) + 30 + 30 + 'px';

        if (categoryBoxe.style.height == heightBox) {

            Discotecas.style.marginBottom = 0;

            categoryBoxe.style.height = 0;
            categoryBoxe.style.opacity = 0;
            Universidades.style.opacity = 1;
            Universidades.classList.remove('button-gray-disabled');
            Restaurantes.style.opacity = 1;
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.style.opacity = 1;
            Estacionamientos.classList.remove('button-gray-disabled');
            Licorerias.style.opacity = 1;
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.style.opacity = 1;
            Clubes.classList.remove('button-gray-disabled');
        } else {
            Discotecas.style.marginBottom = marginBox;

            categoryBoxe.style.height = heightBox;
            Universidades.style.opacity = .6;
            Universidades.classList.add('button-gray-disabled');
            Restaurantes.style.opacity = .6;
            Restaurantes.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = .6;
            Estacionamientos.classList.add('button-gray-disabled');
            Licorerias.style.opacity = .6;
            Licorerias.classList.add('button-gray-disabled');
            Clubes.style.opacity = .6;
            Clubes.classList.add('button-gray-disabled');
            Discotecas.style.opacity = 1;
            setTimeout(function () {
                categoryBoxe.style.opacity = 1;
            }, 200);
        }

    }
};

Licorerias.onclick = function () {
    let categoryBoxe = categoryBox[4];
    let Circulos = categoryBoxe.getElementsByClassName('lugarCategory');

    if (window.matchMedia("(min-width: 1054px)").matches) {

        if(Licorerias.style.opacity == .6){
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0; 
                categoryBox[index].classList.remove('categoryOpen');

                Restaurantes.classList.remove('button-gray-disabled');
                Estacionamientos.classList.remove('button-gray-disabled');
                Universidades.classList.remove('button-gray-disabled');
                Discotecas.classList.remove('button-gray-disabled');
                Licorerias.classList.remove('button-gray-disabled');
                Clubes.classList.remove('button-gray-disabled');       
            }
        }

        categoryBoxe.classList.toggle('categoryOpen');
        let cuantasFilas = Math.ceil(Circulos.length / 6);
        let heightBox = (187 * cuantasFilas) + 12.5 + 'px';

        if (categoryBoxe.style.height == heightBox) {
            categoryBoxe.style.height = 0;
            categoryBoxe.style.opacity = 0;
            Restaurantes.style.opacity = 1;
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.style.opacity = 1;
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.style.opacity = 1;
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.style.opacity = 1;
            Discotecas.classList.remove('button-gray-disabled');
            Clubes.style.opacity = 1;
            Clubes.classList.remove('button-gray-disabled');
        } else {
            categoryBoxe.style.height = heightBox;
            Restaurantes.style.opacity = .6;
            Restaurantes.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = .6;
            Estacionamientos.classList.add('button-gray-disabled');
            Universidades.style.opacity = .6;
            Universidades.classList.add('button-gray-disabled');
            Discotecas.style.opacity = .6;
            Discotecas.classList.add('button-gray-disabled');
            Clubes.style.opacity = .6;
            Clubes.classList.add('button-gray-disabled');
            Licorerias.style.opacity = 1;
            setTimeout(function () {
                categoryBoxe.style.opacity = 1;
            }, 200);
        }
    } else if (window.matchMedia("(min-width: 578px)").matches) {
        //añadiendo espacio para que aparezca el contenido entre las 2 filas
        categoryBoxe.classList.toggle('categoryOpen-2filas-abajo');
        if (window.matchMedia("(max-width: 693px)").matches) {
            var cuantasFilas = Math.ceil(Circulos.length / 3);
        } else if (window.matchMedia("(max-width: 866px)").matches) {
            var cuantasFilas = Math.ceil(Circulos.length / 4);
        } else {
            var cuantasFilas = Math.ceil(Circulos.length / 5);
        }
        let heightBox = (140 * cuantasFilas) + 60 + 'px';
        let marginBox = (140 * cuantasFilas) + 60 + 30 + 'px';

        if (categoryBoxe.style.height == heightBox) {

            Licorerias.style.marginBottom = 0;
            Discotecas.style.marginBottom = 0;
            Clubes.style.marginBottom = 0;

            categoryBoxe.style.height = 0;
            categoryBoxe.style.opacity = 0;
            Restaurantes.style.opacity = 1;
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.style.opacity = 1;
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.style.opacity = 1;
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.style.opacity = 1;
            Discotecas.classList.remove('button-gray-disabled');
            Clubes.style.opacity = 1;
            Clubes.classList.remove('button-gray-disabled');
        } else {
            Licorerias.style.marginBottom = marginBox;
            Discotecas.style.marginBottom = marginBox;
            Clubes.style.marginBottom = marginBox;

            categoryBoxe.style.height = heightBox;
            Restaurantes.style.opacity = .6;
            Restaurantes.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = .6;
            Estacionamientos.classList.add('button-gray-disabled');
            Universidades.style.opacity = .6;
            Universidades.classList.add('button-gray-disabled');
            Discotecas.style.opacity = .6;
            Discotecas.classList.add('button-gray-disabled');
            Clubes.style.opacity = .6;
            Clubes.classList.add('button-gray-disabled');
            Licorerias.style.opacity = 1;
            setTimeout(function () {
                categoryBoxe.style.opacity = 1;
            }, 200);
        }

    } else if (window.matchMedia("(min-width: 359px)").matches) {

        categoryBoxe.classList.toggle('categoryOpen-3filas-3ra');
        var cuantasFilas = Math.ceil(Circulos.length / 3);
        let heightBox = (160 * cuantasFilas) + 30 + 'px';
        let marginBox = (160 * cuantasFilas) + 30 + 30 + 'px';

        if (categoryBoxe.style.height == heightBox) {

            Licorerias.style.marginBottom = 0;
            Clubes.style.marginBottom = 0;

            categoryBoxe.style.height = 0;
            categoryBoxe.style.opacity = 0;
            Universidades.style.opacity = 1;
            Universidades.classList.remove('button-gray-disabled');
            Estacionamientos.style.opacity = 1;
            Estacionamientos.classList.remove('button-gray-disabled');
            Discotecas.style.opacity = 1;
            Discotecas.classList.remove('button-gray-disabled');
            Restaurantes.style.opacity = 1;
            Restaurantes.classList.remove('button-gray-disabled');
            Clubes.style.opacity = 1;
            Clubes.classList.remove('button-gray-disabled');
        } else {
            Licorerias.style.marginBottom = marginBox;
            Clubes.style.marginBottom = marginBox;

            categoryBoxe.style.height = heightBox;
            Universidades.style.opacity = .6;
            Universidades.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = .6;
            Estacionamientos.classList.add('button-gray-disabled');
            Discotecas.style.opacity = .6;
            Discotecas.classList.add('button-gray-disabled');
            Restaurantes.style.opacity = .6;
            Restaurantes.classList.add('button-gray-disabled');
            Clubes.style.opacity = .6;
            Clubes.classList.add('button-gray-disabled');
            Licorerias.style.opacity = 1;
            setTimeout(function () {
                categoryBoxe.style.opacity = 1;
            }, 200);
        }
    }else {
        categoryBoxe.classList.toggle('categoryOpen-individual-5');
        var cuantasFilas = Math.ceil(Circulos.length / 2);
        let heightBox = (160 * cuantasFilas) + 30 + 'px';
        let marginBox = (160 * cuantasFilas) + 30 + 30 + 'px';

        if (categoryBoxe.style.height == heightBox) {

            Licorerias.style.marginBottom = 0;

            categoryBoxe.style.height = 0;
            categoryBoxe.style.opacity = 0;
            Universidades.style.opacity = 1;
            Universidades.classList.remove('button-gray-disabled');
            Restaurantes.style.opacity = 1;
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.style.opacity = 1;
            Estacionamientos.classList.remove('button-gray-disabled');
            Discotecas.style.opacity = 1;
            Discotecas.classList.remove('button-gray-disabled');
            Clubes.style.opacity = 1;
            Clubes.classList.remove('button-gray-disabled');
        } else {
            Licorerias.style.marginBottom = marginBox;

            categoryBoxe.style.height = heightBox;
            Universidades.style.opacity = .6;
            Universidades.classList.add('button-gray-disabled');
            Restaurantes.style.opacity = .6;
            Restaurantes.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = .6;
            Estacionamientos.classList.add('button-gray-disabled');
            Discotecas.style.opacity = .6;
            Discotecas.classList.add('button-gray-disabled');
            Clubes.style.opacity = .6;
            Clubes.classList.add('button-gray-disabled');
            Licorerias.style.opacity = 1;
            setTimeout(function () {
                categoryBoxe.style.opacity = 1;
            }, 200);
        }

    }
};

Clubes.onclick = function () {
    let categoryBoxe = categoryBox[5];
    let Circulos = categoryBoxe.getElementsByClassName('lugarCategory');

    if (window.matchMedia("(min-width: 1054px)").matches) {

        if(Clubes.style.opacity == .6){
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0; 
                categoryBox[index].classList.remove('categoryOpen');

                Restaurantes.classList.remove('button-gray-disabled');
                Estacionamientos.classList.remove('button-gray-disabled');
                Universidades.classList.remove('button-gray-disabled');
                Discotecas.classList.remove('button-gray-disabled');
                Licorerias.classList.remove('button-gray-disabled');
                Clubes.classList.remove('button-gray-disabled');       
            }
        }

        categoryBoxe.classList.toggle('categoryOpen');
        let cuantasFilas = Math.ceil(Circulos.length / 6);
        let heightBox = (187 * cuantasFilas) + 12.5 + 'px';

        if (categoryBoxe.style.height == heightBox) {
            categoryBoxe.style.height = 0;
            categoryBoxe.style.opacity = 0;
            Restaurantes.style.opacity = 1;
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.style.opacity = 1;
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.style.opacity = 1;
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.style.opacity = 1;
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.style.opacity = 1;
            Licorerias.classList.remove('button-gray-disabled');
        } else {
            categoryBoxe.style.height = heightBox;
            Restaurantes.style.opacity = .6;
            Restaurantes.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = .6;
            Estacionamientos.classList.add('button-gray-disabled');
            Universidades.style.opacity = .6;
            Universidades.classList.add('button-gray-disabled');
            Discotecas.style.opacity = .6;
            Discotecas.classList.add('button-gray-disabled');
            Licorerias.style.opacity = .6;
            Licorerias.classList.add('button-gray-disabled');
            Clubes.style.opacity = 1;
            setTimeout(function () {
                categoryBoxe.style.opacity = 1;
            }, 200);
        }
    } else if (window.matchMedia("(min-width: 578px)").matches) {
        //añadiendo espacio para que aparezca el contenido entre las 2 filas
        categoryBoxe.classList.toggle('categoryOpen-2filas-abajo');
        if (window.matchMedia("(max-width: 693px)").matches) {
            var cuantasFilas = Math.ceil(Circulos.length / 3);
        } else if (window.matchMedia("(max-width: 866px)").matches) {
            var cuantasFilas = Math.ceil(Circulos.length / 4);
        } else {
            var cuantasFilas = Math.ceil(Circulos.length / 5);
        }
        let heightBox = (140 * cuantasFilas) + 60 + 'px';
        let marginBox = (140 * cuantasFilas) + 60 + 30 + 'px';

        if (categoryBoxe.style.height == heightBox) {

            Clubes.style.marginBottom = 0;
            Discotecas.style.marginBottom = 0;
            Licorerias.style.marginBottom = 0;

            categoryBoxe.style.height = 0;
            categoryBoxe.style.opacity = 0;
            Restaurantes.style.opacity = 1;
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.style.opacity = 1;
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.style.opacity = 1;
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.style.opacity = 1;
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.style.opacity = 1;
            Licorerias.classList.remove('button-gray-disabled');
        } else {
            Clubes.style.marginBottom = marginBox;
            Discotecas.style.marginBottom = marginBox;
            Licorerias.style.marginBottom = marginBox;

            categoryBoxe.style.height = heightBox;
            Restaurantes.style.opacity = .6;
            Restaurantes.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = .6;
            Estacionamientos.classList.add('button-gray-disabled');
            Universidades.style.opacity = .6;
            Universidades.classList.add('button-gray-disabled');
            Discotecas.style.opacity = .6;
            Discotecas.classList.add('button-gray-disabled');
            Licorerias.style.opacity = .6;
            Licorerias.classList.add('button-gray-disabled');
            Clubes.style.opacity = 1;
            setTimeout(function () {
                categoryBoxe.style.opacity = 1;
            }, 200);
        }

    } else if (window.matchMedia("(min-width: 359px)").matches) {

        categoryBoxe.classList.toggle('categoryOpen-3filas-3ra');
        var cuantasFilas = Math.ceil(Circulos.length / 3);
        let heightBox = (160 * cuantasFilas) + 30 + 'px';
        let marginBox = (160 * cuantasFilas) + 30 + 30 + 'px';

        if (categoryBoxe.style.height == heightBox) {

            Licorerias.style.marginBottom = 0;
            Clubes.style.marginBottom = 0;

            categoryBoxe.style.height = 0;
            categoryBoxe.style.opacity = 0;
            Universidades.style.opacity = 1;
            Universidades.classList.remove('button-gray-disabled');
            Estacionamientos.style.opacity = 1;
            Estacionamientos.classList.remove('button-gray-disabled');
            Discotecas.style.opacity = 1;
            Discotecas.classList.remove('button-gray-disabled');
            Restaurantes.style.opacity = 1;
            Restaurantes.classList.remove('button-gray-disabled');
            Licorerias.style.opacity = 1;
            Licorerias.classList.remove('button-gray-disabled');
        } else {
            Licorerias.style.marginBottom = marginBox;
            Clubes.style.marginBottom = marginBox;

            categoryBoxe.style.height = heightBox;
            Universidades.style.opacity = .6;
            Universidades.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = .6;
            Estacionamientos.classList.add('button-gray-disabled');
            Discotecas.style.opacity = .6;
            Discotecas.classList.add('button-gray-disabled');
            Restaurantes.style.opacity = .6;
            Restaurantes.classList.add('button-gray-disabled');
            Licorerias.style.opacity = .6;
            Licorerias.classList.add('button-gray-disabled');
            Clubes.style.opacity = 1;
            setTimeout(function () {
                categoryBoxe.style.opacity = 1;
            }, 200);
        }
    }else {
        categoryBoxe.classList.toggle('categoryOpen-individual-6');
        var cuantasFilas = Math.ceil(Circulos.length / 2);
        let heightBox = (160 * cuantasFilas) + 30 + 'px';
        let marginBox = (160 * cuantasFilas) + 30 + 30 + 'px';

        if (categoryBoxe.style.height == heightBox) {

            Clubes.style.marginBottom = 0;

            categoryBoxe.style.height = 0;
            categoryBoxe.style.opacity = 0;
            Universidades.style.opacity = 1;
            Universidades.classList.remove('button-gray-disabled');
            Restaurantes.style.opacity = 1;
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.style.opacity = 1;
            Estacionamientos.classList.remove('button-gray-disabled');
            Discotecas.style.opacity = 1;
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.style.opacity = 1;
            Licorerias.classList.remove('button-gray-disabled');
        } else {
            Clubes.style.marginBottom = marginBox;

            categoryBoxe.style.height = heightBox;
            Universidades.style.opacity = .6;
            Universidades.classList.add('button-gray-disabled');
            Restaurantes.style.opacity = .6;
            Restaurantes.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = .6;
            Estacionamientos.classList.add('button-gray-disabled');
            Discotecas.style.opacity = .6;
            Discotecas.classList.add('button-gray-disabled');
            Licorerias.style.opacity = .6;
            Licorerias.classList.add('button-gray-disabled');
            Clubes.style.opacity = 1;
            setTimeout(function () {
                categoryBoxe.style.opacity = 1;
            }, 200);
        }

    }
};