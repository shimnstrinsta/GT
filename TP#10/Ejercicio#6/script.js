
peliculas = [
    {titulo: "Busqueda implacable", rating: 5, loHasVisto: true},
    {titulo: "Norbit", rating: 3, loHasVisto: false},
    {titulo: "Mini espias", rating: 2, loHasVisto: true},
    {titulo: "La vida es bella", rating: 5, loHasVisto: false}
];

peliculas.forEach((peli) => {
    let visto = "No viste";
    if(peli.loHasVisto)
        visto = "Viste"
    
    console.log(`- ${visto}   "${peli.titulo}"    ${peli.rating} estrellas`);
});