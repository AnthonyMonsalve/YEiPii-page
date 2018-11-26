const Universidades = document.getElementById('BtnUniversidades');
const Restaurantes = document.getElementById('BtnRestaurantes');
const Estacionamientos = document.getElementById('BtnEstacionamientos');
const Discotecas = document.getElementById('BtnDiscotecas');
const Licorerias = document.getElementById('BtnLicorerias');
const Clubes = document.getElementById('BtnClubes');
const categoryBox = document.getElementsByClassName('categoryBox');



Universidades.onclick = function () {

    if (true) {
        document.getElementById('rest').click();
    } else {
        console.log('no pasa nada')
    }

    let categoryBoxe = categoryBox[0];
    let Circulos = categoryBoxe.getElementsByClassName('lugarCategory');

    if (window.matchMedia("(min-width: 744px)").matches) {
        if (Universidades.style.opacity == .6) {
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0;
                categoryBox[index].classList.remove('categoryOpen');
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.classList.remove('button-gray-disabled');
        }
        categoryBoxe.classList.toggle('categoryOpen');
        let cuantasFilas = Math.ceil(Circulos.length / 4);
        let heightBox = (200 * cuantasFilas) + 12.5 + 'px';

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
    } else if (window.matchMedia("(min-width: 359px)").matches) {


        if (Universidades.style.opacity == .6) {
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0;

                Licorerias.style.marginBottom = 0;
                Universidades.style.marginBottom = 0;
                Discotecas.style.marginBottom = 0;
                Estacionamientos.style.marginBottom = 0;
                Restaurantes.style.marginBottom = 0;
                Clubes.style.marginBottom = 0;

                categoryBox[index].classList.remove('categoryOpen-3filas');
                categoryBox[index].classList.remove('categoryOpen-3filas-2da');
                categoryBox[index].classList.remove('categoryOpen-3filas-3ra');
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.classList.remove('button-gray-disabled');
        }

        categoryBoxe.classList.toggle('categoryOpen-3filas');

        if (window.matchMedia("(max-width: 474px)").matches) {
            var cuantasFilas = Math.ceil(Circulos.length / 2);
        } else {
            var cuantasFilas = Math.ceil(Circulos.length / 3);
        }

        let heightBox = (200 * cuantasFilas) + 60 + 'px';
        let marginBox = (200 * cuantasFilas) + 60 + 30 + 'px';

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

        if (Universidades.style.opacity == .6) {
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0;

                Licorerias.style.marginBottom = 0;
                Universidades.style.marginBottom = 0;
                Discotecas.style.marginBottom = 0;
                Estacionamientos.style.marginBottom = 0;
                Restaurantes.style.marginBottom = 0;
                Clubes.style.marginBottom = 0;

                categoryBox[index].classList.remove('categoryOpen-individual');
                categoryBox[index].classList.remove('categoryOpen-individual-2');
                categoryBox[index].classList.remove('categoryOpen-individual-3');
                categoryBox[index].classList.remove('categoryOpen-individual-4');
                categoryBox[index].classList.remove('categoryOpen-individual-5');
                categoryBox[index].classList.remove('categoryOpen-individual-6');
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.classList.remove('button-gray-disabled');
        }

        categoryBoxe.classList.toggle('categoryOpen-individual');
        var cuantasFilas = Math.ceil(Circulos.length / 2);
        let heightBox = (190 * cuantasFilas) + 30 + 'px';
        let marginBox = (190 * cuantasFilas) + 30 + 30 + 'px';

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

    if (true) {
        document.getElementById('rest').click();
    } else {
        console.log('no pasa nada')
    }

    let categoryBoxe = categoryBox[1];
    let Circulos = categoryBoxe.getElementsByClassName('lugarCategory');

    if (window.matchMedia("(min-width: 744px)").matches) {
        if (Restaurantes.style.opacity == .6) {
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0;
                categoryBox[index].classList.remove('categoryOpen');
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.classList.remove('button-gray-disabled');
        }
        categoryBoxe.classList.toggle('categoryOpen');
        let cuantasFilas = Math.ceil(Circulos.length / 4);
        let heightBox = (200 * cuantasFilas) + 12.5 + 'px';

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
    } else if (window.matchMedia("(min-width: 359px)").matches) {


        if (Restaurantes.style.opacity == .6) {
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0;

                Licorerias.style.marginBottom = 0;
                Universidades.style.marginBottom = 0;
                Discotecas.style.marginBottom = 0;
                Estacionamientos.style.marginBottom = 0;
                Restaurantes.style.marginBottom = 0;
                Clubes.style.marginBottom = 0;

                categoryBox[index].classList.remove('categoryOpen-3filas');
                categoryBox[index].classList.remove('categoryOpen-3filas-2da');
                categoryBox[index].classList.remove('categoryOpen-3filas-3ra');
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.classList.remove('button-gray-disabled');
        }


        categoryBoxe.classList.toggle('categoryOpen-3filas');
        var cuantasFilas = Math.ceil(Circulos.length / 3);
        if (window.matchMedia("(max-width: 474px)").matches) {
            var cuantasFilas = Math.ceil(Circulos.length / 2);
        } else {
            var cuantasFilas = Math.ceil(Circulos.length / 3);
        }

        let heightBox = (200 * cuantasFilas) + 60 + 'px';
        let marginBox = (200 * cuantasFilas) + 60 + 30 + 'px';

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
    } else {

        if (Restaurantes.style.opacity == .6) {
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0;

                Licorerias.style.marginBottom = 0;
                Universidades.style.marginBottom = 0;
                Discotecas.style.marginBottom = 0;
                Estacionamientos.style.marginBottom = 0;
                Restaurantes.style.marginBottom = 0;
                Clubes.style.marginBottom = 0;

                categoryBox[index].classList.remove('categoryOpen-individual');
                categoryBox[index].classList.remove('categoryOpen-individual-2');
                categoryBox[index].classList.remove('categoryOpen-individual-3');
                categoryBox[index].classList.remove('categoryOpen-individual-4');
                categoryBox[index].classList.remove('categoryOpen-individual-5');
                categoryBox[index].classList.remove('categoryOpen-individual-6');
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.classList.remove('button-gray-disabled');
        }

        categoryBoxe.classList.toggle('categoryOpen-individual-2');
        var cuantasFilas = Math.ceil(Circulos.length / 2);
        let heightBox = (180 * cuantasFilas) + 30 + 'px';
        let marginBox = (180 * cuantasFilas) + 30 + 30 + 'px';

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

    if (true) {
        document.getElementById('esta').click();
    } else {
        console.log('no pasa nada')
    }

    let categoryBoxe = categoryBox[2];
    let Circulos = categoryBoxe.getElementsByClassName('lugarCategory');

    if (window.matchMedia("(min-width: 744px)").matches) {

        if (Estacionamientos.style.opacity == .6) {
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0;
                categoryBox[index].classList.remove('categoryOpen');
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.classList.remove('button-gray-disabled');
        }

        categoryBoxe.classList.toggle('categoryOpen');
        let cuantasFilas = Math.ceil(Circulos.length / 4);
        let heightBox = (200 * cuantasFilas) + 12.5 + 'px';

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
    } else if (window.matchMedia("(min-width: 359px)").matches) {


        if (Estacionamientos.style.opacity == .6) {
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0;

                Licorerias.style.marginBottom = 0;
                Universidades.style.marginBottom = 0;
                Discotecas.style.marginBottom = 0;
                Estacionamientos.style.marginBottom = 0;
                Restaurantes.style.marginBottom = 0;
                Clubes.style.marginBottom = 0;

                categoryBox[index].classList.remove('categoryOpen-3filas');
                categoryBox[index].classList.remove('categoryOpen-3filas-2da');
                categoryBox[index].classList.remove('categoryOpen-3filas-3ra');
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.classList.remove('button-gray-disabled');
        }

        categoryBoxe.classList.toggle('categoryOpen-3filas-2da');
        var cuantasFilas = Math.ceil(Circulos.length / 3);
        if (window.matchMedia("(max-width: 474px)").matches) {
            var cuantasFilas = Math.ceil(Circulos.length / 2);
        } else {
            var cuantasFilas = Math.ceil(Circulos.length / 3);
        }

        let heightBox = (200 * cuantasFilas) + 60 + 'px';
        let marginBox = (200 * cuantasFilas) + 60 + 30 + 'px';

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
    } else {

        if (Estacionamientos.style.opacity == .6) {
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0;

                Licorerias.style.marginBottom = 0;
                Universidades.style.marginBottom = 0;
                Discotecas.style.marginBottom = 0;
                Estacionamientos.style.marginBottom = 0;
                Restaurantes.style.marginBottom = 0;
                Clubes.style.marginBottom = 0;

                categoryBox[index].classList.remove('categoryOpen-individual');
                categoryBox[index].classList.remove('categoryOpen-individual-2');
                categoryBox[index].classList.remove('categoryOpen-individual-3');
                categoryBox[index].classList.remove('categoryOpen-individual-4');
                categoryBox[index].classList.remove('categoryOpen-individual-5');
                categoryBox[index].classList.remove('categoryOpen-individual-6');
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.classList.remove('button-gray-disabled');
        }

        categoryBoxe.classList.toggle('categoryOpen-individual-3');
        var cuantasFilas = Math.ceil(Circulos.length / 2);
        let heightBox = (180 * cuantasFilas) + 30 + 'px';
        let marginBox = (180 * cuantasFilas) + 30 + 30 + 'px';

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

    if (true) {
        document.getElementById('otro').click();
    } else {
        console.log('no pasa nada')
    }

    let categoryBoxe = categoryBox[3];
    let Circulos = categoryBoxe.getElementsByClassName('lugarCategory');

    if (window.matchMedia("(min-width: 744px)").matches) {

        if (Discotecas.style.opacity == .6) {
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0;
                categoryBox[index].classList.remove('categoryOpen');
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.classList.remove('button-gray-disabled');
        }

        categoryBoxe.classList.toggle('categoryOpen');
        let cuantasFilas = Math.ceil(Circulos.length / 4);
        let heightBox = (200 * cuantasFilas) + 12.5 + 'px';

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
    } else if (window.matchMedia("(min-width: 359px)").matches) {

        if (Discotecas.style.opacity == .6) {
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0;

                Licorerias.style.marginBottom = 0;
                Universidades.style.marginBottom = 0;
                Discotecas.style.marginBottom = 0;
                Estacionamientos.style.marginBottom = 0;
                Restaurantes.style.marginBottom = 0;
                Clubes.style.marginBottom = 0;

                categoryBox[index].classList.remove('categoryOpen-3filas');
                categoryBox[index].classList.remove('categoryOpen-3filas-2da');
                categoryBox[index].classList.remove('categoryOpen-3filas-3ra');
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.classList.remove('button-gray-disabled');
        }


        categoryBoxe.classList.toggle('categoryOpen-3filas-2da');
        var cuantasFilas = Math.ceil(Circulos.length / 3);
        if (window.matchMedia("(max-width: 474px)").matches) {
            var cuantasFilas = Math.ceil(Circulos.length / 2);
        } else {
            var cuantasFilas = Math.ceil(Circulos.length / 3);
        }

        let heightBox = (200 * cuantasFilas) + 60 + 'px';
        let marginBox = (200 * cuantasFilas) + 60 + 30 + 'px';

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
    } else {

        if (Discotecas.style.opacity == .6) {
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0;

                Licorerias.style.marginBottom = 0;
                Universidades.style.marginBottom = 0;
                Discotecas.style.marginBottom = 0;
                Estacionamientos.style.marginBottom = 0;
                Restaurantes.style.marginBottom = 0;
                Clubes.style.marginBottom = 0;

                categoryBox[index].classList.remove('categoryOpen-individual');
                categoryBox[index].classList.remove('categoryOpen-individual-2');
                categoryBox[index].classList.remove('categoryOpen-individual-3');
                categoryBox[index].classList.remove('categoryOpen-individual-4');
                categoryBox[index].classList.remove('categoryOpen-individual-5');
                categoryBox[index].classList.remove('categoryOpen-individual-6');
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.classList.remove('button-gray-disabled');
        }

        categoryBoxe.classList.toggle('categoryOpen-individual-4');
        var cuantasFilas = Math.ceil(Circulos.length / 2);
        let heightBox = (180 * cuantasFilas) + 30 + 'px';
        let marginBox = (180 * cuantasFilas) + 30 + 30 + 'px';

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

    if (window.matchMedia("(min-width: 744px)").matches) {

        if (Licorerias.style.opacity == .6) {
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0;
                categoryBox[index].classList.remove('categoryOpen');
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.classList.remove('button-gray-disabled');
        }

        categoryBoxe.classList.toggle('categoryOpen');
        let cuantasFilas = Math.ceil(Circulos.length / 4);
        let heightBox = (200 * cuantasFilas) + 12.5 + 'px';

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
    } else if (window.matchMedia("(min-width: 359px)").matches) {

        if (Licorerias.style.opacity == .6) {
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0;

                Licorerias.style.marginBottom = 0;
                Universidades.style.marginBottom = 0;
                Discotecas.style.marginBottom = 0;
                Estacionamientos.style.marginBottom = 0;
                Restaurantes.style.marginBottom = 0;
                Clubes.style.marginBottom = 0;

                categoryBox[index].classList.remove('categoryOpen-3filas');
                categoryBox[index].classList.remove('categoryOpen-3filas-2da');
                categoryBox[index].classList.remove('categoryOpen-3filas-3ra');
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.classList.remove('button-gray-disabled');
        }

        categoryBoxe.classList.toggle('categoryOpen-3filas-3ra');
        var cuantasFilas = Math.ceil(Circulos.length / 3);
        if (window.matchMedia("(max-width: 474px)").matches) {
            var cuantasFilas = Math.ceil(Circulos.length / 2);
        } else {
            var cuantasFilas = Math.ceil(Circulos.length / 3);
        }

        let heightBox = (200 * cuantasFilas) + 60 + 'px';
        let marginBox = (200 * cuantasFilas) + 60 + 30 + 'px';

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
    } else {

        if (Licorerias.style.opacity == .6) {
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0;

                Licorerias.style.marginBottom = 0;
                Universidades.style.marginBottom = 0;
                Discotecas.style.marginBottom = 0;
                Estacionamientos.style.marginBottom = 0;
                Restaurantes.style.marginBottom = 0;
                Clubes.style.marginBottom = 0;

                categoryBox[index].classList.remove('categoryOpen-individual');
                categoryBox[index].classList.remove('categoryOpen-individual-2');
                categoryBox[index].classList.remove('categoryOpen-individual-3');
                categoryBox[index].classList.remove('categoryOpen-individual-4');
                categoryBox[index].classList.remove('categoryOpen-individual-5');
                categoryBox[index].classList.remove('categoryOpen-individual-6');
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.classList.remove('button-gray-disabled');
        }

        categoryBoxe.classList.toggle('categoryOpen-individual-5');
        var cuantasFilas = Math.ceil(Circulos.length / 2);
        let heightBox = (180 * cuantasFilas) + 30 + 'px';
        let marginBox = (180 * cuantasFilas) + 30 + 30 + 'px';

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

    if (window.matchMedia("(min-width: 744px)").matches) {

        if (Clubes.style.opacity == .6) {
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0;
                categoryBox[index].classList.remove('categoryOpen');
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.classList.remove('button-gray-disabled');
        }

        categoryBoxe.classList.toggle('categoryOpen');
        let cuantasFilas = Math.ceil(Circulos.length / 4);
        let heightBox = (200 * cuantasFilas) + 12.5 + 'px';

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
    } else if (window.matchMedia("(min-width: 359px)").matches) {

        if (Clubes.style.opacity == .6) {
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0;

                Licorerias.style.marginBottom = 0;
                Universidades.style.marginBottom = 0;
                Discotecas.style.marginBottom = 0;
                Estacionamientos.style.marginBottom = 0;
                Restaurantes.style.marginBottom = 0;
                Clubes.style.marginBottom = 0;

                categoryBox[index].classList.remove('categoryOpen-3filas');
                categoryBox[index].classList.remove('categoryOpen-3filas-2da');
                categoryBox[index].classList.remove('categoryOpen-3filas-3ra');
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.classList.remove('button-gray-disabled');
        }

        categoryBoxe.classList.toggle('categoryOpen-3filas-3ra');
        var cuantasFilas = Math.ceil(Circulos.length / 3);
        if (window.matchMedia("(max-width: 474px)").matches) {
            var cuantasFilas = Math.ceil(Circulos.length / 2);
        } else {
            var cuantasFilas = Math.ceil(Circulos.length / 3);
        }

        let heightBox = (200 * cuantasFilas) + 60 + 'px';
        let marginBox = (200 * cuantasFilas) + 60 + 30 + 'px';

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
    } else {

        if (Clubes.style.opacity == .6) {
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0;

                Licorerias.style.marginBottom = 0;
                Universidades.style.marginBottom = 0;
                Discotecas.style.marginBottom = 0;
                Estacionamientos.style.marginBottom = 0;
                Restaurantes.style.marginBottom = 0;
                Clubes.style.marginBottom = 0;

                categoryBox[index].classList.remove('categoryOpen-individual');
                categoryBox[index].classList.remove('categoryOpen-individual-2');
                categoryBox[index].classList.remove('categoryOpen-individual-3');
                categoryBox[index].classList.remove('categoryOpen-individual-4');
                categoryBox[index].classList.remove('categoryOpen-individual-5');
                categoryBox[index].classList.remove('categoryOpen-individual-6');
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Clubes.classList.remove('button-gray-disabled');
        }

        categoryBoxe.classList.toggle('categoryOpen-individual-6');
        var cuantasFilas = Math.ceil(Circulos.length / 2);
        let heightBox = (180 * cuantasFilas) + 30 + 'px';
        let marginBox = (180 * cuantasFilas) + 30 + 30 + 'px';

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