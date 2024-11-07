const messages = [
  "Gracias por ser mi felicidad diaria.",
  "Estos 3 meses han sido los mejores de mi vida.",
  "Por muchos meses y años más juntos. ❤️",
  "Tu sonrisa ilumina mis días y llena mi corazón de alegría.",
  "Cada momento contigo es un tesoro que guardo en mi corazón.",
  "Eres el mejor regalo que la vida me ha dado.",
  "Gracias por hacerme sentir amado cada día.",
  "Tu amor es mi fortaleza y mi inspiración. Te amo inmensamente.",
  "Cada segundo contigo es un recuerdo precioso que quiero atesorar para siempre.",
  "Tu amor ha transformado mi vida en una historia de felicidad.",
  "Quiero seguir caminando a tu lado por siempre. ❤️",
  "Eres mi razón de ser y mi felicidad infinita.",
  "Desde que llegaste, cada día es especial y único.",
  "Eres la persona que llena mi mundo de color.",
  "Juntos hemos creado recuerdos que jamás olvidaré.",
  "No puedo esperar a ver todo lo que nos espera en el futuro.",
  "Te amo más de lo que las palabras pueden expresar.",
  "Tu amor es la melodía que alegra mi corazón.",
  "Gracias por hacer de estos 3 meses algo inolvidable.",
  "Cada momento a tu lado es un regalo precioso.",
  "Mi amor por ti crece más y más cada día.",
  "Eres mi sueño hecho realidad, y no quiero despertar nunca.",
  "Estos 3 meses son solo el comienzo de una gran historia.",
  "No importa cuántos meses pasen, siempre serás mi todo.",
  "Eres la persona con la que siempre soñé estar.",
  "Gracias por compartir tu vida y tu amor conmigo.",
  "Prometo estar siempre a tu lado, amarte y cuidarte.",
  "Contigo, aprendí lo que significa el verdadero amor.",
  "No puedo esperar a hacer más recuerdos hermosos contigo.",
  "Cada momento contigo es un instante de pura felicidad.",
  "Eres mi paz, mi alegría y mi amor eterno.",
  "Gracias por darme tanto amor en tan poco tiempo.",
  "Estos 3 meses han sido una prueba de que el amor verdadero existe.",
  "Amo la persona que soy cuando estoy contigo.",
  "Quiero amarte hoy, mañana y por siempre.",
  "Eres el latido de mi corazón y la razón de mi sonrisa.",
  "No importa lo que venga, siempre quiero estar contigo.",
  "Gracias por cada sonrisa, cada abrazo y cada palabra de amor.",
  "Cada día contigo es un capítulo nuevo en nuestra historia de amor."
];

let messageIndex = 0;

function showSpecialMessage() {
    const messageElement = document.getElementById("message");
    
    // Desvanecer la frase actual durante 2 segundos
    messageElement.style.transition = "opacity 2s ease-out";
    messageElement.style.opacity = 0; // Desvanecer la frase

    // Esperar a que la frase se desvanezca antes de cambiar el mensaje
    setTimeout(() => {
        // Cambiar al nuevo mensaje
        messageIndex = (messageIndex + 1) % messages.length;
        messageElement.innerHTML = messages[messageIndex];

        // Restablecer la opacidad a 1 (para mostrar la nueva frase)
        messageElement.style.opacity = 1;

        // Aplicar el efecto de rebote a la nueva frase
        messageElement.style.animation = "bounce 1s ease-out";

        // Eliminar el efecto de rebote después de que termine
        setTimeout(() => {
            messageElement.style.animation = "";
        }, 1000); // 1 segundo para el rebote

        // Iniciar la lluvia de corazones
        startHeartRain();

        // Deshabilitar el botón mientras se muestra el mensaje
        disableButton();
    }, 2000); // Espera 2 segundos para que la frase actual se desvanezca
}

// Función para crear los corazones
function startHeartRain() {
    const container = document.querySelector(".container");
    for (let i = 0; i < 30; i++) {  // Genera 30 corazones
        createHeart(container);
    }
    setTimeout(removeHearts, 2000); // Después de 2 segundos, elimina los corazones
}

// Función para crear un corazón dentro del contenedor
function createHeart(container) {
    const heart = document.createElement("div");
    heart.classList.add("falling-heart");
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`; // Entre 3 y 5 segundos
    container.appendChild(heart);
}

// Función para desvanecer y eliminar los corazones
function removeHearts() {
    const hearts = document.querySelectorAll(".falling-heart");
    hearts.forEach(heart => {
        heart.style.transition = "opacity 1s"; // transición de opacidad
        heart.style.opacity = 0; // Desvanecer
        setTimeout(() => heart.remove(), 1000); // Eliminar después de la transición
    });
}

// Función para deshabilitar el botón
function disableButton() {
    const button = document.querySelector(".celebrate-btn");
    if (button) {
        button.disabled = true; // Deshabilitar el botón
        button.style.cursor = "not-allowed"; // Cambiar el cursor
    }
    // Habilitar el botón después de 4 segundos (tiempo suficiente para el efecto)
    setTimeout(() => {
        if (button) {
            button.disabled = false; // Volver a habilitar el botón
            button.style.cursor = "pointer"; // Restaurar el cursor
        }
    }, 4000);
}
