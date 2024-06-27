/*
    Scope global
    Scope local
*/

var nombre = "Luis";

function decirHola(){
    var nombre = "Uriel";
    console.log("Hola "+ nombre);
}

decirHola();

console.log(nombre);