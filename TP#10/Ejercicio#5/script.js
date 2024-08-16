
let estudiantes = [
    {Estudiante: "Juan", Nota: 6},
    {Estudiante: "Mario", Nota: 8},
    {Estudiante: "Julia", Nota: 10},
    {Estudiante: "Sofia", Nota: 2},
];

estudiantes.map((estudiante) => {
    let nota = estudiante.Nota;
    if(nota > 5){
        if(nota+2 > 10){
            nota = 10;
        }
        else{
            nota+=2
        }
    }
    estudiante.Nota = nota;

})

estudiantes.forEach((estudiante) => console.log(estudiante.Nota))
