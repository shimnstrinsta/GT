
const parrafos = document.querySelectorAll("p")

parrafos.forEach(parrafo => {    
    parrafo.addEventListener("click", event => {
        parrafo.classList.toggle("resaltado");
    })
})