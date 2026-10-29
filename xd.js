const carrusel = document.getElementById("carrusel");
const slides = document.querySelectorAll(".imagenes_carrusel");

let indice = 0;

setInterval(() => {
    indice++;
    if(indice >= slides.length){
        indice = 0;
    }
    carrusel.style.transform =
    `translateX(-${indice * 100}%)`;

}, 3000);
