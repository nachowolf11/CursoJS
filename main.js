let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let edad = prompt ("Ingrese su edad:");

if(parseInt(edad)<18){
    alert("Hola " + nombre + " " + apellido + ", debes consultar con un mayor para acceder a este sitio.");
} 
else{
    alert("Hola " + nombre + " " + apellido + ", eres mayor de edad.");
}