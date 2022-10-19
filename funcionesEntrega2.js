//Objetos
function Bebida(id,nombre, precio, stock){
    this.id=id;
    this.nombre=nombre;
    this.precio=precio;
    this.stock=stock;
}

const Cerveza = new Bebida (1,"Cerveza patagonia", 500, 5);
const Gin = new Bebida (2,"Gin",1000,2);
const Whisky = new Bebida (3,"Whisky",1500,1);


const productos = [Cerveza,Gin,Whisky];

//FuncionRestaStock
function restaStock(producto){
    producto--
    return producto
}



let opcionElegida= prompt("Ingrese el id del producto a comprar: \n 1- Cerveza \n2- Gin \n 3- Whisky")

const productoElegido = productos.find(elemento => elemento.id == opcionElegida);


alert(`El producto elegido es: ${productoElegido.nombre}`);

stockProd=restaStock(productoElegido.stock);

if (stockProd==0){
    alert("No disponemos de stock del producto que selecciono")
}
else{
    alert("El stock actual del producto es " + stockProd);
}



