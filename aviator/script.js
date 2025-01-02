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


