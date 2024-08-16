let miAuto = {};

miAuto["marca"] = "Renault";
miAuto["año"] = 2015;
miAuto["nuevo"] = false;


let propertyKey = "modelo";

miAuto[propertyKey] = "Logan";

let anotherProperty = "precio";

miAuto[anotherProperty] = 4000;

let nextProperty = "color";

miAuto[nextProperty] = "Negro";

for(let propiedad in miAuto) {
    console.log(`-${propiedad}: ${miAuto[propiedad]}`)
};