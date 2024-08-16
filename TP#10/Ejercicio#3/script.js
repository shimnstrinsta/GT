
let usuario = {
    usuario: "Bautista Beraza",
    edad: 18,
    direccion: "9 de Julio 1916",
    fechaDeNacimiento: "22/02/2006",
    contraseña: "tengoSueño"
}

console.log(`Su nuevo usuario tiene los siguientes datos: `)

for(let dato in usuario) {
    console.log(`-${usuario[dato]}`)
};