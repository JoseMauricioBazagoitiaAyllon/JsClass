/*
Ejemplos de tipos de datos
*/ 

//Tipo de dato String
var nombre ="Carlos";
console.log(nombre);
nombre = 10;
console.log(typeof nombre)

//Tipo de dato numerico
var numero = 6;
console.log(numero);

//Tipo de dato objeto
var objeto = {
    nombre : "jose",
    apellido :"Bazagoitia",
    edad : 65
};
console.log(objeto)
//Tipo de dato booleano
var bandera = true
console.log(bandera)
//tipo de dato funcion
function myfuncion(){

}
console.log(typeof myfuncion)
// Tipo de dato symbol

var simbolo = Symbol("mi simbolo");
console.log(simbolo)
// tipo de dato clase
class persona{
    constructor(nombre, apellido){
        this.apellido = apellido;
        this.nombre = nombre;
    }
}
console.log(typeof persona)
 
//tipo de dato undefined
var x;
console.log(x)
//null
var y = null;
console.log(y)