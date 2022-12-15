// Campo producto name
// campo cantidad - number 
// Boton agregar btnAgregar
// AlertValidacionesTexto
//AlertValidaciones
//contadorPreoductos
//productosTotal
//precioTotal

let txtNombre = Document.getElementById("Name");
let txtNumber = Document.getElementById("Number");
let total = Document.getElementById("precioTotal");

let tabla = document.getElementById("tablaListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");

let btnAgregar = document.getElementById("btnAgrgar");

btnAgregar.addEventListener("click",function(event){
    event.preventDefault();
    
});