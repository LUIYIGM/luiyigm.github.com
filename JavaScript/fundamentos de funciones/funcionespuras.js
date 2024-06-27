/*
let arreglo = [1,2,3]
arreglo[0] = 2; // Mutacion

let valor = 2;
valor += 1; //mutacion


//Funcion pura: No produce efectos secundarios

let edades = [20]; // Aun no vemos arreglos

function modificador(edades){
     edades[0] = 25;
    }

console.log(edades);
modificador(edades);
console.log(edades);
*/

let edades = [20]; // Aun no vemos arreglos

function modificador(edades){
     let copia = [...edades]; // Genero una copia
     copia[0] = 25; // Modifico la copia y no el valor original
     return copia // para comunicar los cambios con el exterior es preferible usar
    }

console.log(edades);
modificador(edades);
console.log(edades);