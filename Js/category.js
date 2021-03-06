function cine(){
    const Universidades = document.getElementById('BtnUniversidades');
    const Restaurantes = document.getElementById('BtnRestaurantes');
    const Estacionamientos = document.getElementById('BtnEstacionamientos');
    const Licorerias = document.getElementById('BtnLicorerias');
    const Discotecas = document.getElementById('BtnDiscotecas');
    const Farmacia = document.getElementById('BtnFarmacia');
    const categoryBox = document.getElementsByClassName('categoryBox');
    if (!0) {
        document.getElementById('otro').click()
    } else {
        console.log('no pasa nada')
    }
    let categoryBoxe = categoryBox[0];
    let Circulos = categoryBoxe.getElementsByClassName('lugarCategory');
    if (window.matchMedia("(min-width: 768px)").matches) {
        if (Licorerias.style.opacity == .6) {
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0;
                categoryBox[index].classList.remove('categoryOpen')
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Farmacia.classList.remove('button-gray-disabled')
        }
        categoryBoxe.classList.toggle('categoryOpen');
        let cuantasFilas = Math.ceil(Circulos.length / 4);
        let heightBox = (210 * 3) + 12.5 + 'px';
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
            Farmacia.style.opacity = 1;
            Farmacia.classList.remove('button-gray-disabled')
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
            Farmacia.style.opacity = .6;
            Farmacia.classList.add('button-gray-disabled');
            Licorerias.style.opacity = 1;
            setTimeout(function() {
                categoryBoxe.style.opacity = 1
            }, 300)
        }
    } else if (window.matchMedia("(min-width: 359px)").matches) {
        if (Licorerias.style.opacity == .6) {
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0;
                Discotecas.style.marginBottom = 0;
                Universidades.style.marginBottom = 0;
                Licorerias.style.marginBottom = 0;
                Estacionamientos.style.marginBottom = 0;
                Restaurantes.style.marginBottom = 0;
                Farmacia.style.marginBottom = 0;
                categoryBox[index].classList.remove('categoryOpen-3filas');
                categoryBox[index].classList.remove('categoryOpen-3filas-2da');
                categoryBox[index].classList.remove('categoryOpen-3filas-3ra')
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Farmacia.classList.remove('button-gray-disabled')
        }
        categoryBoxe.classList.toggle('categoryOpen-3filas');
        var cuantasFilas = Math.ceil(Circulos.length / 3);
        if (window.matchMedia("(max-width: 474px)").matches) {
            var cuantasFilas = Math.ceil(Circulos.length / 2)
        } else {
            var cuantasFilas = Math.ceil(Circulos.length / 3)
        }
        let heightBox = (170 * 3) + 60 + 'px';
        let marginBox = (170 * 3) + 50 + 40 + 'px';
        if (categoryBoxe.style.height == heightBox) {
            Universidades.style.marginBottom = 0;
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
            Farmacia.style.opacity = 1;
            Farmacia.classList.remove('button-gray-disabled')
        } else {
            Universidades.style.marginBottom = marginBox;
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
            Farmacia.style.opacity = .6;
            Farmacia.classList.add('button-gray-disabled');
            Licorerias.style.opacity = 1;
            setTimeout(function() {
                categoryBoxe.style.opacity = 1
            }, 300)
        }
    } else {
        if (Licorerias.style.opacity == .6) {
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0;
                Discotecas.style.marginBottom = 0;
                Universidades.style.marginBottom = 0;
                Licorerias.style.marginBottom = 0;
                Estacionamientos.style.marginBottom = 0;
                Restaurantes.style.marginBottom = 0;
                Farmacia.style.marginBottom = 0;
                categoryBox[index].classList.remove('categoryOpen-individual');
                categoryBox[index].classList.remove('categoryOpen-individual-2');
                categoryBox[index].classList.remove('categoryOpen-individual-3');
                categoryBox[index].classList.remove('categoryOpen-individual-4');
                categoryBox[index].classList.remove('categoryOpen-individual-5');
                categoryBox[index].classList.remove('categoryOpen-individual-6')
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Farmacia.classList.remove('button-gray-disabled')
        }
        categoryBoxe.classList.toggle('categoryOpen-individual');
        var cuantasFilas = Math.ceil(Circulos.length / 2);
        let heightBox = (170 * 3) + 25 + 'px';
        let marginBox = (170 * 3) + 15 + 40 + 'px';
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
            Farmacia.style.opacity = 1;
            Farmacia.classList.remove('button-gray-disabled')
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
            Farmacia.style.opacity = .6;
            Farmacia.classList.add('button-gray-disabled');
            Licorerias.style.opacity = 1;
            setTimeout(function() {
                categoryBoxe.style.opacity = 1
            }, 300)
        }
    }
}

function uni() {
    const Universidades = document.getElementById('BtnUniversidades');
    const Restaurantes = document.getElementById('BtnRestaurantes');
    const Estacionamientos = document.getElementById('BtnEstacionamientos');
    const Discotecas = document.getElementById('BtnDiscotecas');
    const Licorerias = document.getElementById('BtnLicorerias');
    const Farmacia = document.getElementById('BtnFarmacia');
    const categoryBox = document.getElementsByClassName('categoryBox');
    //console.log('me estan pisando, me pisan.. HELP!')
    if (!0) {
        document.getElementById('rest').click()
    } else {
        console.log('no pasa nada')
    }
    let categoryBoxe = categoryBox[1];
    categoryBoxe.setAttribute("id", "YEiPii-u-scroll");
    let Circulos = categoryBoxe.getElementsByClassName('lugarCategory');
    if (window.matchMedia("(min-width: 768px)").matches) {
        if (Universidades.style.opacity == .6) {
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0;
                categoryBox[index].classList.remove('categoryOpen')
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Farmacia.classList.remove('button-gray-disabled')
        }
        categoryBoxe.classList.toggle('categoryOpen');
        for (let id = 0; id < Math.ceil(Circulos.length / 12); id++) {
            Circulos[id * 12].setAttribute("id", id + "YEiPii-reference")
        }
        let cuantasFilas = Math.ceil(Circulos.length / 4);
        let heightBox = (205 * 3) + 20 + 'px';
        var el = $("#1YEiPii-reference");
        var position = el.position();
        $("#YEiPii-u-scroll").scrollTop(position.top + 5);
        var buttons = '<input type="submit" value="Numero parrafos" id="num_parrafos" name="Numero Parrafos"/>';
        $('#YEiPii-u-scroll').append(buttons);
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
            Farmacia.style.opacity = 1;
            Farmacia.classList.remove('button-gray-disabled')
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
            Farmacia.style.opacity = .6;
            Farmacia.classList.add('button-gray-disabled');
            Universidades.style.opacity = 1;
            setTimeout(function() {
                categoryBoxe.style.opacity = 1
            }, 300)
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
                Farmacia.style.marginBottom = 0;
                categoryBox[index].classList.remove('categoryOpen-3filas');
                categoryBox[index].classList.remove('categoryOpen-3filas-2da');
                categoryBox[index].classList.remove('categoryOpen-3filas-3ra')
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Farmacia.classList.remove('button-gray-disabled')
        }
        categoryBoxe.classList.toggle('categoryOpen-3filas');
        if (window.matchMedia("(max-width: 474px)").matches) {
            var cuantasFilas = Math.ceil(Circulos.length / 2)
        } else {
            var cuantasFilas = Math.ceil(Circulos.length / 3)
        }
        let heightBox = (170 * 3) + 60 + 'px';
        let marginBox = (170 * 3) + 50 + 40 + 'px';
        if (categoryBoxe.style.height == heightBox) {
            Universidades.style.marginBottom = 0;
            Licorerias.style.marginBottom = 0;
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
            Farmacia.style.opacity = 1;
            Farmacia.classList.remove('button-gray-disabled')
        } else {
            Universidades.style.marginBottom = marginBox;
            Licorerias.style.marginBottom = marginBox;
            categoryBoxe.style.height = heightBox;
            Restaurantes.style.opacity = .6;
            Restaurantes.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = .6;
            Estacionamientos.classList.add('button-gray-disabled');
            Discotecas.style.opacity = .6;
            Discotecas.classList.add('button-gray-disabled');
            Licorerias.style.opacity = .6;
            Licorerias.classList.add('button-gray-disabled');
            Farmacia.style.opacity = .6;
            Farmacia.classList.add('button-gray-disabled');
            Universidades.style.opacity = 1;
            setTimeout(function() {
                categoryBoxe.style.opacity = 1
            }, 300)
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
                Farmacia.style.marginBottom = 0;
                categoryBox[index].classList.remove('categoryOpen-individual');
                categoryBox[index].classList.remove('categoryOpen-individual-2');
                categoryBox[index].classList.remove('categoryOpen-individual-3');
                categoryBox[index].classList.remove('categoryOpen-individual-4');
                categoryBox[index].classList.remove('categoryOpen-individual-5');
                categoryBox[index].classList.remove('categoryOpen-individual-6')
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Farmacia.classList.remove('button-gray-disabled')
        }
        categoryBoxe.classList.toggle('categoryOpen-individual-2');
        var cuantasFilas = Math.ceil(Circulos.length / 2);
        let heightBox = (170 * 3) + 25 + 'px';
        let marginBox = (170 * 3) + 15 + 40 + 'px';
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
            Farmacia.style.opacity = 1;
            Farmacia.classList.remove('button-gray-disabled')
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
            Farmacia.style.opacity = .6;
            Farmacia.classList.add('button-gray-disabled');
            Universidades.style.opacity = 1;
            setTimeout(function() {
                categoryBoxe.style.opacity = 1
            }, 300)
        }
    }
}

function res(){
    const Universidades = document.getElementById('BtnUniversidades');
    const Restaurantes = document.getElementById('BtnRestaurantes');
    const Estacionamientos = document.getElementById('BtnEstacionamientos');
    const Discotecas = document.getElementById('BtnDiscotecas');
    const Licorerias = document.getElementById('BtnLicorerias');
    const Farmacia = document.getElementById('BtnFarmacia');
    const categoryBox = document.getElementsByClassName('categoryBox');
    if (!0) {
        document.getElementById('rest').click()
    } else {
        console.log('no pasa nada')
    }
    let categoryBoxe = categoryBox[2];
    let Circulos = categoryBoxe.getElementsByClassName('lugarCategory');
    if (window.matchMedia("(min-width: 768px)").matches) {
        if (Restaurantes.style.opacity == .6) {
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0;
                categoryBox[index].classList.remove('categoryOpen')
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Farmacia.classList.remove('button-gray-disabled')
        }
        categoryBoxe.classList.toggle('categoryOpen');
        let cuantasFilas = Math.ceil(Circulos.length / 4);
        let heightBox = (200 * 3) + 12.5 + 'px';
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
            Farmacia.style.opacity = 1;
            Farmacia.classList.remove('button-gray-disabled')
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
            Farmacia.style.opacity = .6;
            Farmacia.classList.add('button-gray-disabled');
            Restaurantes.style.opacity = 1;
            setTimeout(function() {
                categoryBoxe.style.opacity = 1
            }, 300)
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
                Farmacia.style.marginBottom = 0;
                categoryBox[index].classList.remove('categoryOpen-3filas');
                categoryBox[index].classList.remove('categoryOpen-3filas-2da');
                categoryBox[index].classList.remove('categoryOpen-3filas-3ra')
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Farmacia.classList.remove('button-gray-disabled')
        }
        categoryBoxe.classList.toggle('categoryOpen-3filas-2da');
        var cuantasFilas = Math.ceil(Circulos.length / 3);
        if (window.matchMedia("(max-width: 474px)").matches) {
            var cuantasFilas = Math.ceil(Circulos.length / 2)
        } else {
            var cuantasFilas = Math.ceil(Circulos.length / 3)
        }
        let heightBox = (170 * 3) + 60 + 'px';
        let marginBox = (170 * 3) + 50 + 40 + 'px';
        if (categoryBoxe.style.height == heightBox) {
            Estacionamientos.style.marginBottom = 0;
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
            Farmacia.style.opacity = 1;
            Farmacia.classList.remove('button-gray-disabled')
        } else {
            Estacionamientos.style.marginBottom = marginBox;
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
            Farmacia.style.opacity = .6;
            Farmacia.classList.add('button-gray-disabled');
            Restaurantes.style.opacity = 1;
            setTimeout(function() {
                categoryBoxe.style.opacity = 1
            }, 300)
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
                Farmacia.style.marginBottom = 0;
                categoryBox[index].classList.remove('categoryOpen-individual');
                categoryBox[index].classList.remove('categoryOpen-individual-2');
                categoryBox[index].classList.remove('categoryOpen-individual-3');
                categoryBox[index].classList.remove('categoryOpen-individual-4');
                categoryBox[index].classList.remove('categoryOpen-individual-5');
                categoryBox[index].classList.remove('categoryOpen-individual-6')
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Farmacia.classList.remove('button-gray-disabled')
        }
        categoryBoxe.classList.toggle('categoryOpen-individual-3');
        var cuantasFilas = Math.ceil(Circulos.length / 2);
        let heightBox = (170 * 3) + 25 + 'px';
        let marginBox = (170 * 3) + 15 + 40 + 'px';
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
            Farmacia.style.opacity = 1;
            Farmacia.classList.remove('button-gray-disabled')
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
            Farmacia.style.opacity = .6;
            Farmacia.classList.add('button-gray-disabled');
            Restaurantes.style.opacity = 1;
            setTimeout(function() {
                categoryBoxe.style.opacity = 1
            }, 300)
        }
    }
}

function est(){
    const Universidades = document.getElementById('BtnUniversidades');
    const Restaurantes = document.getElementById('BtnRestaurantes');
    const Estacionamientos = document.getElementById('BtnEstacionamientos');
    const Discotecas = document.getElementById('BtnDiscotecas');
    const Licorerias = document.getElementById('BtnLicorerias');
    const Farmacia = document.getElementById('BtnFarmacia');
    const categoryBox = document.getElementsByClassName('categoryBox');
    if (!0) {
        document.getElementById('esta').click()
    } else {
        console.log('no pasa nada')
    }
    let categoryBoxe = categoryBox[3];
    let Circulos = categoryBoxe.getElementsByClassName('lugarCategory');
    if (window.matchMedia("(min-width: 768px)").matches) {
        if (Estacionamientos.style.opacity == .6) {
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0;
                categoryBox[index].classList.remove('categoryOpen')
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Farmacia.classList.remove('button-gray-disabled')
        }
        categoryBoxe.classList.toggle('categoryOpen');
        let cuantasFilas = Math.ceil(Circulos.length / 4);
        let heightBox = (200 * 2) + 12.5 + 'px';
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
            Farmacia.style.opacity = 1;
            Farmacia.classList.remove('button-gray-disabled')
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
            Farmacia.style.opacity = .6;
            Farmacia.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = 1;
            setTimeout(function() {
                categoryBoxe.style.opacity = 1
            }, 300)
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
                Farmacia.style.marginBottom = 0;
                categoryBox[index].classList.remove('categoryOpen-3filas');
                categoryBox[index].classList.remove('categoryOpen-3filas-2da');
                categoryBox[index].classList.remove('categoryOpen-3filas-3ra')
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Farmacia.classList.remove('button-gray-disabled')
        }
        categoryBoxe.classList.toggle('categoryOpen-3filas-2da');
        var cuantasFilas = Math.ceil(Circulos.length / 3);
        if (window.matchMedia("(max-width: 474px)").matches) {
            var cuantasFilas = Math.ceil(Circulos.length / 2)
        } else {
            var cuantasFilas = Math.ceil(Circulos.length / 3)
        }
        let heightBox = (170 * 3) + 60 + 'px';
        let marginBox = (170 * 3) + 50 + 40 + 'px';
        if (categoryBoxe.style.height == heightBox) {
            Estacionamientos.style.marginBottom = 0;
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
            Farmacia.style.opacity = 1;
            Farmacia.classList.remove('button-gray-disabled')
        } else {
            Estacionamientos.style.marginBottom = marginBox;
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
            Farmacia.style.opacity = .6;
            Farmacia.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = 1;
            setTimeout(function() {
                categoryBoxe.style.opacity = 1
            }, 300)
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
                Farmacia.style.marginBottom = 0;
                categoryBox[index].classList.remove('categoryOpen-individual');
                categoryBox[index].classList.remove('categoryOpen-individual-2');
                categoryBox[index].classList.remove('categoryOpen-individual-3');
                categoryBox[index].classList.remove('categoryOpen-individual-4');
                categoryBox[index].classList.remove('categoryOpen-individual-5');
                categoryBox[index].classList.remove('categoryOpen-individual-6')
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Farmacia.classList.remove('button-gray-disabled')
        }
        categoryBoxe.classList.toggle('categoryOpen-individual-4');
        var cuantasFilas = Math.ceil(Circulos.length / 2);
        let heightBox = (170 * 3) + 25 + 'px';
        let marginBox = (170 * 3) + 15 + 40 + 'px';
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
            Farmacia.style.opacity = 1;
            Farmacia.classList.remove('button-gray-disabled')
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
            Farmacia.style.opacity = .6;
            Farmacia.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = 1;
            setTimeout(function() {
                categoryBoxe.style.opacity = 1
            }, 300)
        }
    }
}

function farm(){
    const Universidades = document.getElementById('BtnUniversidades');
    const Restaurantes = document.getElementById('BtnRestaurantes');
    const Estacionamientos = document.getElementById('BtnEstacionamientos');
    const Discotecas = document.getElementById('BtnDiscotecas');
    const Licorerias = document.getElementById('BtnLicorerias');
    const Farmacia = document.getElementById('BtnFarmacia');
    const categoryBox = document.getElementsByClassName('categoryBox');
    if (!0) {
        document.getElementById('farma').click()
    } else {
        console.log('no pasa nada')
    }
    let categoryBoxe = categoryBox[4];
    let Circulos = categoryBoxe.getElementsByClassName('lugarCategory');
    if (window.matchMedia("(min-width: 768px)").matches) {
        if (Farmacia.style.opacity == .6) {
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0;
                categoryBox[index].classList.remove('categoryOpen')
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Farmacia.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled')
        }
        categoryBoxe.classList.toggle('categoryOpen');
        let cuantasFilas = Math.ceil(Circulos.length / 4);
        let heightBox = (210 * 3) + 12.5 + 'px';
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
            Discotecas.style.opacity = 1;
            Discotecas.classList.remove('button-gray-disabled')
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
            Discotecas.style.opacity = .6;
            Discotecas.classList.add('button-gray-disabled');
            Farmacia.style.opacity = 1;
            setTimeout(function() {
                categoryBoxe.style.opacity = 1
            }, 300)
        }
    } else if (window.matchMedia("(min-width: 359px)").matches) {
        if (Farmacia.style.opacity == .6) {
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0;
                Licorerias.style.marginBottom = 0;
                Universidades.style.marginBottom = 0;
                Farmacia.style.marginBottom = 0;
                Estacionamientos.style.marginBottom = 0;
                Restaurantes.style.marginBottom = 0;
                Discotecas.style.marginBottom = 0;
                categoryBox[index].classList.remove('categoryOpen-3filas');
                categoryBox[index].classList.remove('categoryOpen-3filas-2da');
                categoryBox[index].classList.remove('categoryOpen-3filas-3ra')
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Farmacia.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled')
        }
        categoryBoxe.classList.toggle('categoryOpen-3filas-3ra');
        var cuantasFilas = Math.ceil(Circulos.length / 3);
        if (window.matchMedia("(max-width: 474px)").matches) {
            var cuantasFilas = Math.ceil(Circulos.length / 2)
        } else {
            var cuantasFilas = Math.ceil(Circulos.length / 3)
        }
        let heightBox = (170 * 3) + 60 + 'px';
        let marginBox = (170 * 3) + 50 + 40 + 'px';
        if (categoryBoxe.style.height == heightBox) {
            Discotecas.style.marginBottom = 0;
            Farmacia.style.marginBottom = 0;
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
            Discotecas.style.opacity = 1;
            Discotecas.classList.remove('button-gray-disabled')
        } else {
            Discotecas.style.marginBottom = marginBox;
            Farmacia.style.marginBottom = marginBox;
            categoryBoxe.style.height = heightBox;
            Universidades.style.opacity = .6;
            Universidades.classList.add('button-gray-disabled');
            Restaurantes.style.opacity = .6;
            Restaurantes.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = .6;
            Estacionamientos.classList.add('button-gray-disabled');
            Licorerias.style.opacity = .6;
            Licorerias.classList.add('button-gray-disabled');
            Discotecas.style.opacity = .6;
            Discotecas.classList.add('button-gray-disabled');
            Farmacia.style.opacity = 1;
            setTimeout(function() {
                categoryBoxe.style.opacity = 1
            }, 300)
        }
    } else {
        if (Farmacia.style.opacity == .6) {
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0;
                Licorerias.style.marginBottom = 0;
                Universidades.style.marginBottom = 0;
                Farmacia.style.marginBottom = 0;
                Estacionamientos.style.marginBottom = 0;
                Restaurantes.style.marginBottom = 0;
                Discotecas.style.marginBottom = 0;
                categoryBox[index].classList.remove('categoryOpen-individual');
                categoryBox[index].classList.remove('categoryOpen-individual-2');
                categoryBox[index].classList.remove('categoryOpen-individual-3');
                categoryBox[index].classList.remove('categoryOpen-individual-4');
                categoryBox[index].classList.remove('categoryOpen-individual-5');
                categoryBox[index].classList.remove('categoryOpen-individual-6')
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Farmacia.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled')
        }
        categoryBoxe.classList.toggle('categoryOpen-individual-5');
        var cuantasFilas = Math.ceil(Circulos.length / 2);
        let heightBox = (170 * 3) + 25 + 'px';
        let marginBox = (170 * 3) + 15 + 40 + 'px';
        if (categoryBoxe.style.height == heightBox) {
            Farmacia.style.marginBottom = 0;
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
            Discotecas.style.opacity = 1;
            Discotecas.classList.remove('button-gray-disabled')
        } else {
            Farmacia.style.marginBottom = marginBox;
            categoryBoxe.style.height = heightBox;
            Universidades.style.opacity = .6;
            Universidades.classList.add('button-gray-disabled');
            Restaurantes.style.opacity = .6;
            Restaurantes.classList.add('button-gray-disabled');
            Estacionamientos.style.opacity = .6;
            Estacionamientos.classList.add('button-gray-disabled');
            Licorerias.style.opacity = .6;
            Licorerias.classList.add('button-gray-disabled');
            Discotecas.style.opacity = .6;
            Discotecas.classList.add('button-gray-disabled');
            Farmacia.style.opacity = 1;
            setTimeout(function() {
                categoryBoxe.style.opacity = 1
            }, 300)
        }
    }
}

function dis(){
    const Universidades = document.getElementById('BtnUniversidades');
    const Restaurantes = document.getElementById('BtnRestaurantes');
    const Estacionamientos = document.getElementById('BtnEstacionamientos');
    const Discotecas = document.getElementById('BtnDiscotecas');
    const Licorerias = document.getElementById('BtnLicorerias');
    const Farmacia = document.getElementById('BtnFarmacia');
    const categoryBox = document.getElementsByClassName('categoryBox');
    if (!0) {
        document.getElementById('cine').click()
    } else {
        console.log('no pasa nada')
    }
    let categoryBoxe = categoryBox[5];
    let Circulos = categoryBoxe.getElementsByClassName('lugarCategory');
    if (window.matchMedia("(min-width: 768px)").matches) {
        if (Discotecas.style.opacity == .6) {
            for (let index = 0; index < 6; index++) {
                categoryBox[index].style.height = 0;
                categoryBox[index].style.opacity = 0;
                categoryBox[index].classList.remove('categoryOpen')
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Farmacia.classList.remove('button-gray-disabled')
        }
        categoryBoxe.classList.toggle('categoryOpen');
        let cuantasFilas = Math.ceil(Circulos.length / 4);
        let heightBox = (210 * 3) + 12.5 + 'px';
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
            Farmacia.style.opacity = 1;
            Farmacia.classList.remove('button-gray-disabled')
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
            Farmacia.style.opacity = .6;
            Farmacia.classList.add('button-gray-disabled');
            Discotecas.style.opacity = 1;
            setTimeout(function() {
                categoryBoxe.style.opacity = 1
            }, 300)
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
                Farmacia.style.marginBottom = 0;
                categoryBox[index].classList.remove('categoryOpen-3filas');
                categoryBox[index].classList.remove('categoryOpen-3filas-2da');
                categoryBox[index].classList.remove('categoryOpen-3filas-3ra')
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Farmacia.classList.remove('button-gray-disabled')
        }
        categoryBoxe.classList.toggle('categoryOpen-3filas-3ra');
        var cuantasFilas = Math.ceil(Circulos.length / 3);
        if (window.matchMedia("(max-width: 474px)").matches) {
            var cuantasFilas = Math.ceil(Circulos.length / 2)
        } else {
            var cuantasFilas = Math.ceil(Circulos.length / 3)
        }
        let heightBox = (170 * 3) + 60 + 'px';
        let marginBox = (170 * 3) + 50 + 40 + 'px';
        if (categoryBoxe.style.height == heightBox) {
            Farmacia.style.marginBottom = 0;
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
            Farmacia.style.opacity = 1;
            Farmacia.classList.remove('button-gray-disabled')
        } else {
            Farmacia.style.marginBottom = marginBox;
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
            Farmacia.style.opacity = .6;
            Farmacia.classList.add('button-gray-disabled');
            Discotecas.style.opacity = 1;
            setTimeout(function() {
                categoryBoxe.style.opacity = 1
            }, 300)
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
                Farmacia.style.marginBottom = 0;
                categoryBox[index].classList.remove('categoryOpen-individual');
                categoryBox[index].classList.remove('categoryOpen-individual-2');
                categoryBox[index].classList.remove('categoryOpen-individual-3');
                categoryBox[index].classList.remove('categoryOpen-individual-4');
                categoryBox[index].classList.remove('categoryOpen-individual-5');
                categoryBox[index].classList.remove('categoryOpen-individual-6')
            }
            Restaurantes.classList.remove('button-gray-disabled');
            Estacionamientos.classList.remove('button-gray-disabled');
            Universidades.classList.remove('button-gray-disabled');
            Discotecas.classList.remove('button-gray-disabled');
            Licorerias.classList.remove('button-gray-disabled');
            Farmacia.classList.remove('button-gray-disabled')
        }
        categoryBoxe.classList.toggle('categoryOpen-individual-6');
        var cuantasFilas = Math.ceil(Circulos.length / 2);
        let heightBox = (170 * 3) + 25 + 'px';
        let marginBox = (170 * 3) + 15 + 40 + 'px';
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
            Farmacia.style.opacity = 1;
            Farmacia.classList.remove('button-gray-disabled')
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
            Farmacia.style.opacity = .6;
            Farmacia.classList.add('button-gray-disabled');
            Discotecas.style.opacity = 1;
            setTimeout(function() {
                categoryBoxe.style.opacity = 1
            }, 300)
        }
    }
}