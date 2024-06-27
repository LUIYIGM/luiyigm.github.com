let edades = [20];


function modificador(edades){
    edades[0] = 25;
    console.log("Dentro de la funcion: "+ edades);
}

console.log(edades);
modificador(edades);
console.log(edades);