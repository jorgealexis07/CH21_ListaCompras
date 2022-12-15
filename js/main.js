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
let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let contadorProductos = document.getElementById("contadorProductos");
let productosTotal = document.getElementById("productosTotal");
let precioTotal = document.getElementById("precioTotal");
let idTimeout;
let precio = 0;
let cantidad = 0;
let costoTotal = 0;
let contador=0;
let totalEnProductos = 0;


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

  /*   function Validaciones() {
        validarNombre
        if (validarNombre() == true && validarCantidad()==true ) {
            return true;
        }else{
            return false;
        }
    } */

 btnAgregar.addEventListener("click",function(event){
    event.preventDefault();
  /*   if (Validaciones() == false) {
        alertValidaciones.style.display= "block";
        alertValidaciones.innerHTML = "Valores invalidos";
    }else{
        alertValidaciones.style.display= "none";
    } */
    clearTimeout(idTimeout);
    alertValidacionesTexto.innerHTML="";
    if ((! validarNombre()) || (! validarCantidad())) {
        let lista= " <ul>";    
        if (! validarNombre()) {
            txtNombre.style.border= "red thin solid"
            lista += "<li> Se debe escribir un nombre válido</li>";
        }    //validar nombre
        if (! validarCantidad()) {
            txtNumber.style.border= "red thin solid"
            lista += "<li> Se debe escribir una cantidad válida</li>";
        }    //validar nombre
        lista+= " </ul>";
        alertValidacionesTexto.insertAdjacentHTML("beforeend",lista);
        alertValidaciones.style.display="block";
        idTimeout =setTimeout(function () {
            alertValidaciones.style.display="none";    
        },5000);
        return false;
    }//if ! validaciones
    txtNombre.style.border="";
    txtNumber.style.border="";
    alertValidaciones.style.display="none"; 
    contador++;
    contadorProductos.innerHTML=contador;
    let cantidad = parseFloat(txtNumber.value);
    totalEnProductos += cantidad;
    productosTotal.innerHTML = totalEnProductos;
    precio = getPrecio();
    costoTotal+=precio*cantidad;
    precioTotal.innerHTML = "$ "+costoTotal.toFixed(2);

    let row = `<tr> 
    <td>${contador} </td>
    <td>${txtNombre.value} </td>
    <td>${txtNumber.value} </td>
    <td>${precio} </td>
    </td>`;
    cuerpoTabla[0].insertAdjacentHTML("beforeend", row);
        txtNombre.value = "";
        txtNumber.value = "";
        txtNombre.focus();






    
});