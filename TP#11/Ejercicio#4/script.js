
const boton1 = document.querySelector("#btn_1");
const boton2 = document.querySelector("#btn_2");
const boton3 = document.querySelector("#btn_3");
const imgs = document.querySelectorAll("img");


imgs.forEach(img => {
    img.addEventListener("click", event => {
        img.classList.add("oculto")
    })
})

boton1.addEventListener("click", event => {
    let img = document.querySelector("#img_1");    
    img.classList.remove("oculto");
})

boton2.addEventListener("click", event => {
    let img = document.querySelector("#img_2");    
    img.classList.remove("oculto");
})

boton3.addEventListener("click", event => {
    let img = document.querySelector("#img_3");    
    img.classList.remove("oculto");
})