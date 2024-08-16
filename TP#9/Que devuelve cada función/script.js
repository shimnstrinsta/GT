function test1(x, y) {
    return y - x;
}
  
test1(10, 40);

// Valor esperado: 30
// Valor final: 30

function test2(x, y) {
    return x * 2;
    console.log(x);
    return x / 2;
}
  
test2(10);
  
// Valor esperado: 20
// Valor final: 20