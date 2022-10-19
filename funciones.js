//El proyecto se trata de una tienda de box con alcohol, valido la edad del usuario, si es menor de edad no puede navegar en este sitio.
//si el usuario es mayor de edad, se le da la bienvenida.

let EdadCliente = parseInt(prompt("Ingresa su edad"));
let nombreCliente = prompt("Ingrese su nombre");

function MayoriaEdad(edad) {
  let EsMayorDeEdad = false;
  if (EdadCliente >= 18) {
    EsMayorDeEdad = true;
  }
  return EsMayorDeEdad;
}

let Validaredad = MayoriaEdad(EdadCliente);

if (Validaredad == false) {
  alert(nombreCliente + " es menor de edad y no puede ingresar a este sitio");
} else {
  alert("Bienvenido " + nombreCliente + " a la licoreria!");
}


//FuncionRestaStock
function restaStock(producto){
    producto--
    return producto
}

//Escribo las caracteristicas del producto

//Precio
const PrecioPatagonia=500;
const PrecioGin=1000;
const PrecioWhisky=1500;

//Stock
let stockPatagonia=5;
let stockGin=2;
let stockWhisky=1;

//el usuario debe evaluar que producto desea comprar:

let FinalizarCompra=true;

do{
let producto = prompt("**ELEGI EL BOX A COMPRAR  \n1- Box Cerveza Patagonia \n2-Box Gin Tonic \n3- Box Whisky\n-FIN para salir");
if(producto=="1"){
    stockPatagonia= restaStock(stockPatagonia)
    alert("El precio del producto es " + PrecioPatagonia + "\n El stock es " + stockPatagonia)
}else if (producto=="2"){
    stockGin= restaStock(stockGin)
    alert("El precio del producto es " + PrecioGin + "\n El stock es " + stockGin)
}else if (producto=="3"){
    stockWhisky= restaStock(stockWhisky)
    alert("El precio del producto es " + PrecioWhisky + "\n El stock es " + stockWhisky)
}else if(producto=="FIN"){
     FinalizarCompra=false;
}else{
    alert("Usted eligio una opcion incorrecta");
}
}while(FinalizarCompra==true);