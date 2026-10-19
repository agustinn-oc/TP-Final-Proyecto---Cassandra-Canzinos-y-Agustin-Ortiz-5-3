const carrusel = document.getElementById('carrusel')
const prevBtn = document.getElementById('prevBtb')
const nextBtn = document.getElementById('nextBtn')
const indicadores = document.getElementById('indicador')

let carrentIndex = 0
const items = document.querySelectorAll('carrusel')
const totalItems = items.length

for(lef i = 0, i < totalItems, i++){
    const dot = document.childElement('div')
    dot.classList.add('indicador')
    if(i == 0) dot.classList.add('active')
        dot.addEventListener('click' , () => goToSlide(i))
        indicadores.appendChild(dot)    
}

function updateIndicadores(){
    document.querySelectorAll('.indicador').forEach((indicador,index)=>{
        indicador.classList.toggle('active' , index == currentIndex)
    })
}
    function goToSlide(index){
        carrentIndex = index
        carrusel.style.transform = 'translateX(-${carrentIndex * 100}%)'
        updateIndicadores()
    }

function nextSlide(){
    currentIndex = (carrentIndex + 1)% totalItems
    goToSlide(currentIndex)
}
function prevSlide(){
    currentIndex = (carrentIndex - 1 + totalItems)% totalItems
    goToSlide(currentIndex)
}      

nextBtn.addEventListener('click', nextSlide())
prevBtn.addEventListener('click', prevSlide())



