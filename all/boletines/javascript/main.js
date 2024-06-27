//Obtener los elementos de la clase .close

let links = document.querySelectorAll('.close');

//Recorrerlos

links.forEach(function(link){
    //Agregar evento click a cada uno de ellos
    link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content');

        //Quitar las clases de animacion
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");

        //Agregar clases para animar salida

        content.classList.add('animate__fadeOutUp');
        content.classList.add('animate__animated');

        setTimeout(function(){
            location.href = "/";
        },500);

        // setInterval  bucle ejecutar cada 1 segundo o tiempo asignado

        return false;
    });

});

/*
let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
    icono.classList.remove("fa-star-o");
    icono.classList.add("fa-star");
});

*/

