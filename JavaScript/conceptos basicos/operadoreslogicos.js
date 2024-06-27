/* 4 operadores logicos

&& El operador AND
|| El operador OR
! El operador negativo o NOT
?? El operador nullish coalescing || fusion de nulos o union nulosa

*/

/* 20 && 10
"hola" && ""
true && false
*/

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("---- && ----");
let edad = 28;
console.log(edad > 18 && edad < 30);
console.log(edad > 18 && edad < 25);

console.log("---- OR ----");
let edad2 = 35;
console.log(edad2 > 18 || edad2 < 30);
console.log(edad2 > 18 || edad2 < 25);

console.log("---- ! ----");
console.log(!false);
console.log(!true);

console.log("---- ?? ----");
console.log(null ?? "Hola");