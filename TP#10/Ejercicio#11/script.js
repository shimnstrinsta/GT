
function totalArticulos(ecommerce){
    ecommerce.forEach(producto => {
        console.log(`- Producto: ${producto.nombre}  Total:${producto.articulos * producto.precio}`);
    });
}


let ecommerce  = [
    {nombre: "Samnsung TV", precio: 6000, articulos: 10},
    {nombre: "DELL notebook", precio: 4000, articulos: 30},
    {nombre: "Auriculares Sony", precio: 1500, articulos: 15},
    {nombre: "Monitor Philips", precio: 1200, articulos: 20},
    {nombre: "Teclado logitech", precio: 3000, articulos: 5}
];


totalArticulos(ecommerce);