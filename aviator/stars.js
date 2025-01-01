// stars.js

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);  // Añadir el canvas al body

// Ajustar el tamaño del canvas al tamaño de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Clase para las estrellas
class Star {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1; // Estrellas de tamaño aleatorio
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
    }

    // Método para actualizar la posición de la estrella
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Si la estrella se sale de la pantalla, la colocamos de nuevo en una posición aleatoria
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }

    // Método para dibujar la estrella
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
    }
}

const stars = [];
const numStars = 200; // Número de estrellas

// Crear las estrellas
for (let i = 0; i < numStars; i++) {
    stars.push(new Star());
}

// Función para actualizar y dibujar las estrellas
function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas

    // Dibujar todas las estrellas
    for (let i = 0; i < stars.length; i++) {
        stars[i].update(); // Actualizar la posición de cada estrella
        stars[i].draw(); // Dibujar la estrella
    }

    requestAnimationFrame(animateStars); // Llamada recursiva para el siguiente frame
}

// Iniciar la animación de las estrellas
animateStars();

// Ajustar el tamaño del canvas si se redimensiona la ventana
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
