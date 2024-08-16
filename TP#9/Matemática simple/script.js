function triplicador(num){
    return num * 3;
}

function multiplicador(num1,num2){
    return num1 * num2;
}

function division(num1,num2){
    return num1 / num2;
}

function resto(num1,num2){
    return num1 % num2;    
}

let variableInicial = 5;
console.log("El valor final es: "+resto(division(multiplicador(triplicador(variableInicial),12),12),3))