const universidades = document.getElementById('BtnUniversidades');
const categoryBox = document.getElementsByClassName('categoryBox');
universidades.onclick = function() {
    categoryBox[0].classList.toggle('categoryOpen');
};