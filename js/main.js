// Campo producto name
// campo cantidad - number 
// Boton agregar btnAgregar
// AlertValidacionesTexto
//AlertValidaciones
//contadorPreoductos
//productosTotal
//precioTotal

let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");
let total = document.getElementById("precioTotal");
let tabla = document.getElementById("tablaListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");
let btnAgregar = document.getElementById("btn-Agregar");

//Genera un precio al azar.
    function getPrecio(){
        return Math.floor(Math.random()*50*100)/100 ;
    }//getPrecio

    function validarNombre() {
        return (txtNombre.value.length>2)?true:false
    }//validar nombre

    function validarCantidad() {
        if (txtNumber.value.length==0) {
            return false;
        }//if
        //is not a number: si no es un numero
        if (isNaN(txtNumber.value) ) {
            return false;
        }//if
        if (parseFloat(txtNumber.value)<=0) {
            return false;
        }//if
        return true;
    }//validar Cantidad

 btnAgregar.addEventListener("click",function(event){
    event.preventDefault();
    console.log(validarNombre());
    
}); 