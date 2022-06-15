class comercio {
    constructor(nombre, articulo, talle, color) {
        this.nombre = nombre;
        this.articulo = articulo;
        this.talle= talle;
        this.color= color;
    }
}
const prendas = [];
prendas.push(new comercio("Sweater", 1 , "L", "azul"));
prendas.push(new comercio("Calza", 2 , "M", "verde"));
prendas.push(new comercio("Pantalon", 3 ,"XS" , "negro"));
prendas.push(new comercio("Camiseta", 4 , "XXL", "negro"));
prendas.push(new comercio("Guantes", 5 , "S", "blanco"));

console.log(prendas);

