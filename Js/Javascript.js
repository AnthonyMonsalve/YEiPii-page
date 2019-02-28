const xhtpp = new XMLHttpRequest();

xhtpp.open('GET', 'https://trestful.yeipii.com/serverbusiness/business/clients/partners', true)

xhtpp.send();

xhtpp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        //console.log(this.responseText)
        const datos = JSON.parse(this.responseText)
        const cantidadCategorias = (datos.categorias).length;
        const divididos = []
        var masUno = 1;

        function swipesI(){
            var swiperU = document.querySelector('.sCU');
            var slider = new Swiper(swiperU, {
                loop: true,
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true
                },
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
              });
              var swiperR = document.querySelector('.sCR');
              var slider = new Swiper(swiperR, {
                  loop: true,
                  pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                  },
                  navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  },
                });
                var swiperE = document.querySelector('.sCE');
                var slider = new Swiper(swiperE, {
                    loop: true,
                    pagination: {
                      el: '.swiper-pagination',
                      clickable: true
                    },
                    navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    },
                  });
                  var swiperD = document.querySelector('.sCD');
                  var slider = new Swiper(swiperD, {

                      navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                      },
                    });
                    var swiperL = document.querySelector('.sCL');
                    var slider = new Swiper(swiperL, {
                        loop: true,
                        pagination: {
                          el: '.swiper-pagination',
                          clickable: true
                        },
                        navigation: {
                          nextEl: '.swiper-button-next',
                          prevEl: '.swiper-button-prev',
                        },
                      });

                //console.log('swipe created')
        }

        if (window.matchMedia("(max-width: 700px)").matches) {
            var patron = 6;
        } else {
            var patron = 12;
        }

        const logos = document.querySelector('#contCategory')

        for (let i = 0; i < cantidadCategorias; i++) {

            if (i == 0) {
                logos.innerHTML += `<div class="categoryBox" id="BtnUniversidades-contenido"><div id="desktop-colegios" style="max-width: 100%"><div class="swiper-container sCU"><div class="swiper-wrapper" id="padreCat1"></div> <div class="swiper-button-next"></div> <div class="swiper-button-prev"></div>`
            } else if (i == 1) {
                logos.innerHTML += `<div class="categoryBox" id="BtnRestaurantes-contenido"><div id="desktop-restaurantes" style="max-width: 100%"><div class="swiper-container sCR"><div class="swiper-wrapper" id="padreCat2"></div> <div class="swiper-button-next"></div> <div class="swiper-button-prev"></div><script></script>`
            } else if (i == 2) {
                logos.innerHTML += `<div class="categoryBox" id="BtnEstacionamientos-contenido"><div id="desktop-estacionamientos" style="max-width: 100%"><div class="swiper-container sCE"><div class="swiper-wrapper" id="padreCat3"></div> <div class="swiper-button-next"></div> <div class="swiper-button-prev"></div><script></script>`
            } else if (i == 3) {
                logos.innerHTML += `<div class="categoryBox" id="BtnDiscotecas-contenido"><div id="desktop-otros" style="max-width: 100%"><div class="swiper-container sCD"><div class="swiper-wrapper" id="padreCat4"></div> <script></script>`
            } else if (i == 4) {
                logos.innerHTML += `<div class="categoryBox" id="BtnLicorerias-contenido"><div id="desktop-licorerias" style="max-width: 100%"><div class="swiper-container sCL"><div class="swiper-wrapper" id="padreCat5"></div> <div class="swiper-button-next"></div> <div class="swiper-button-prev"></div><script></script>`
            }

            var cantidadLocalesPorCategorias = (datos.categorias[i].lugares).length

            var a = 0;
            var b = patron;

            for (var e = 0; e < (Math.ceil(cantidadLocalesPorCategorias / patron)); e++) {
                var paginaDeSlider = (datos.categorias[i].lugares).slice(a, b)
                var paginaDeSliderTamano = paginaDeSlider.length
                var UniversidadesJ = document.querySelector('#padreCat1')
                var RestaurantesJ = document.querySelector('#padreCat2')
                var EstacionamientosJ = document.querySelector('#padreCat3')
                var OtrosJ = document.querySelector('#padreCat4')
                var LicoreriasJ = document.querySelector('#padreCat5')
                a += patron
                b += patron

                if (i == 0) {
                    UniversidadesJ.innerHTML += `<div class="swiper-slide"><div class="categoryBox-interno" id="slide${i+masUno}"></div></div>`
                } else if (i == 1) {
                    RestaurantesJ.innerHTML += `<div class="swiper-slide"><div class="categoryBox-interno" id="slide${i+masUno}"></div></div>`
                } else if (i == 2) {
                    EstacionamientosJ.innerHTML += `<div class="swiper-slide"><div class="categoryBox-interno" id="slide${i+masUno}"></div></div>`
                } else if (i == 3) {
                    OtrosJ.innerHTML += `<div class="swiper-slide"><div class="categoryBox-interno" id="slide${i+masUno}"></div></div>`
                } else if (i == 4) {
                    LicoreriasJ.innerHTML += `<div class="swiper-slide"><div class="categoryBox-interno" id="slide${i+masUno}"></div></div>`
                }

                masUno += 1

                for (let lg = 0; lg < paginaDeSliderTamano; lg++) {
                    var swiperSlide = document.getElementsByClassName("swiper-slide").length;

                    var swipeContent = document.querySelector(`#slide${swiperSlide}`)


                    // console.log(paginaDeSlider[lg])
                    if (i == 0) {
                        swipeContent.innerHTML += `<div class="lugarCategory">
                                                    <img src="${paginaDeSlider[lg].imagen}" alt="${paginaDeSlider[lg].lugar}" />
                                                    <h4>${paginaDeSlider[lg].lugar}<span>${paginaDeSlider[lg].ubicacion}</span></h4>
                                                    <span>@${paginaDeSlider[lg].usuario}</span>
                                                    </div>`
                    } else if (i == 1) {
                        swipeContent.innerHTML += `<div class="lugarCategory">
                                                    <img src="${paginaDeSlider[lg].imagen}" alt="${paginaDeSlider[lg].lugar}" />
                                                    <h4>${paginaDeSlider[lg].lugar}<span>${paginaDeSlider[lg].ubicacion}</span></h4>
                                                    <span>@${paginaDeSlider[lg].usuario}</span>
                                                    </div>`
                    } else if (i == 2) {
                        swipeContent.innerHTML += `<div class="lugarCategory">
                                                    <img src="${paginaDeSlider[lg].imagen}" alt="${paginaDeSlider[lg].lugar}" />
                                                    <h4>${paginaDeSlider[lg].lugar}<span>${paginaDeSlider[lg].ubicacion}</span></h4>
                                                    <span>@${paginaDeSlider[lg].usuario}</span>
                                                    </div>`
                    } else if (i == 3) {
                        swipeContent.innerHTML += `<div class="lugarCategory">
                                                    <img src="${paginaDeSlider[lg].imagen}" alt="${paginaDeSlider[lg].lugar}" />
                                                    <h4>${paginaDeSlider[lg].lugar}<span>${paginaDeSlider[lg].ubicacion}</span></h4>
                                                    <span>@${paginaDeSlider[lg].usuario}</span>
                                                    </div>`
                    } else if (i == 4) {
                        swipeContent.innerHTML += `<div class="lugarCategory">
                                                    <img src="${paginaDeSlider[lg].imagen}" alt="${paginaDeSlider[lg].lugar}" />
                                                    <h4>${paginaDeSlider[lg].lugar}<span>${paginaDeSlider[lg].ubicacion}</span></h4>
                                                    <span>@${paginaDeSlider[lg].usuario}</span>
                                                    </div>`
                    }
                }

            }
            masUno -= 1
        }
        console.log(divididos + 'YA')
        swipesI()
    }
}

