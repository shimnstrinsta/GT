
let numeros = [2, 4, 5, 37, 0];
let numerosDuplicados = {};

let duplicados = numeros.map((num) => num *2);

for(let i = 0; i < numeros.length; i++){
    numerosDuplicados[numeros[i]] = duplicados[i];
}

for(numero in numerosDuplicados){
    console.log(`El duplicado de ${numero} es ${numerosDuplicados[numero]}`);
}