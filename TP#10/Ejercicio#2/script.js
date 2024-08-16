
let capitales = {
    Argentina: "Buenos Aires",
    Uruguay: "Montevideo"
};

let lugar = "Uruguay";

capitales["lugar"] // Deberia devolver undefined o que no se encontro en el objeto
capitales[lugar] // Deberia devolver Montevideo
capitales.lugar // Deberia devolver undefined o que no se encontro en el objeto

capitales["Argentina"] // Deberia devolver Buenos Aires
capitales.Argentina // Deberia devolverr Buenos Aires
capitales[Argentina] // Deberia devolver undefined o que no se encontro en el objeto