function seEjecutaUnEvento(){

    const parrafo = document.createElement("p");
    parrafo.textContent = "BEEP";
    document.body.appendChild(parrafo);
    document.body.classList.toggle("color");
}

const btn = document.querySelector("#btn_beep");

btn.addEventListener("click", seEjecutaUnEvento);