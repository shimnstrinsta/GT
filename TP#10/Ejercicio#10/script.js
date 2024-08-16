
let personas = [
    {nombre: "Alba", edad : 15},
    {nombre: "Estrella", edad : 30},
    {nombre: "Belen", edad : 20},
    {nombre: "Santiago", edad : 4},
    {nombre: "Katherine", edad : 55},
]

personas.sort((p1, p2) => p1.edad - p2.edad); // Ordena las personas por edad de menor a mayor

personas.forEach((persona,index) => {
    persona.posicion = index; // Otorga un valor de posicion segun el index
})

console.log(personas)
