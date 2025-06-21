// Función para crear flores o corazones en movimiento
function createFloatingElement() {
    const element = document.createElement('img');
    element.src = 'heart2.png'; // Cambia esto por la ruta de tu imagen
    element.className = 'flower';
    element.style.left = Math.random() * window.innerWidth + 'px'; // Posición aleatoria
    document.body.appendChild(element);

    // Eliminar el elemento después de un tiempo
    setTimeout(() => {
        element.remove();
    }, 5000); // Eliminar después de 5 segundos
}

// Crear flores o corazones cada 1 segundo
setInterval(createFloatingElement, 1000);

// Función para resaltar los bordes
function highlightBorders() {
    document.body.classList.add('highlight'); // Añadir clase para el borde rojo

    // Quitar la clase después de 2 segundos
    setTimeout(() => {
        document.body.classList.remove('highlight');
    }, 2000); // Cambia el tiempo según lo necesites
}
