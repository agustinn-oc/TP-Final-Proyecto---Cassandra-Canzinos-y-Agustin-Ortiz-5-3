
//inicializar la variable de local storage como una lista, para guardar las ids de las canciones compradas
    var idlista = JSON.parse(localStorage.getItem('cancionescarrito'));
if(null === idlista || 0 === idlista)
{
     localStorage.setItem("cancionescarrito", JSON.stringify([0])); 
}



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


const carrito = document.getElementById("carro contador");

