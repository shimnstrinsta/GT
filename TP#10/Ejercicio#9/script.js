
let actoresVocales = [];
let vocales = ['A', 'E', 'I', 'O', 'U'];
let actoresPrincipales = ["Tom Hanks", "Johnny Deep", "Elizabeth Taylor", "Morgan Freeman", "Jennifer Ariston", "Meryl Steep", "Natalie Portman", "Ashton Kutcher"];

let peliculas = [];
let actoresPrincipalesPorPelicula = {
    "Titanic": "Leonardo DiCaprio",
    "El padrino": "Al Pacino",
    "Matrix": "Keanu Reeves",
    "Iron man": "Robert Downey Jr",
    "Soy leyenda": "Will Smith",
    "Bastardos sin gloria": "Brad Pitt",
    "Bad boys" : "Will Smith",
    "Hombres de negro": "Will Smith",
    "Guerra mundial Z" : "Brad Pitt"
}

actoresVocales = actoresPrincipales.filter((actor) => {    
    if(vocales.includes(actor.split(" ")[0][0]) || vocales.includes(actor.split(" ")[1][0]))
        return actor;
    }
);

console.log("Actores que empiezan con vocales: \n"+actoresVocales)

for (pelicula in actoresPrincipalesPorPelicula){
    actoresPrincipales.push(actoresPrincipalesPorPelicula[pelicula]);
    peliculas.push(pelicula);
}

let peliculaPorActor = {};

for(pelicula in actoresPrincipalesPorPelicula){
    peliculaPorActor[actoresPrincipalesPorPelicula[pelicula]] = [];
}

for(pelicula in actoresPrincipalesPorPelicula){
    peliculaPorActor[actoresPrincipalesPorPelicula[pelicula]].push(pelicula);
}

console.log(`Actores por peliculas:`)
console.log(peliculaPorActor)

