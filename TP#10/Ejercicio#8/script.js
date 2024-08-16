
let personas = [
    {nombre: "Ana", edad: 28},
    {nombre: "Maria", edad: 24},
    {nombre: "Jose", edad: 31}
];

let personasMayores27 = personas.filter((persona) => persona.edad > 27);

console.log(personasMayores27);