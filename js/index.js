// Função de mudar o celular

function imgSlide(e){
    document.querySelector('#iphone').src = e;
}

// Funcão de mudar a cor do circulo

function mudarCorCirculo(color) {
    const circulo = document.querySelector('.circle');
    circulo.style.background = color
}