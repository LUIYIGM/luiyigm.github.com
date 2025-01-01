// script.js
const user = "admin";
const password = "12345";

function login() {
    const username = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === user && passwordInput === password) {
        errorMessage.textContent = "";
        alert("¡Login exitoso!");
        // Redirigir a otra página al hacer login exitoso
        window.location.href = "script.html"; // Cambia a la página a la que deseas redirigir
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos.";
    }
}

// stars.js
const starContainer = document.querySelector(".stars");

function createStars() {
    for (let i = 0; i < 100; i++) {  // Crear 100 estrellas
        let star = document.createElement("div");
        star.classList.add("star");
        // Posicionamos aleatoriamente las estrellas
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        // Asignamos velocidades y tamaños aleatorios a las estrellas
        const size = Math.random() * 3 + 1;  // Tamaño de las estrellas
        const animationDuration = Math.random() * 3 + 3; // Duración de la animación

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Aplicamos una animación diferente a cada estrella
        star.style.animationDuration = `${animationDuration}s`;

        starContainer.appendChild(star);
    }
}

// Llamamos a la función para crear las estrellas al cargar la página
createStars();

