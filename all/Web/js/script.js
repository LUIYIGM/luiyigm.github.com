// Variables y configuraciones iniciales
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-slide');
const totalImages = images.length;
const intervalTime = 5000;
let autoSlideInterval;

// Función para mostrar la imagen en el índice especificado
function showImage(index) {
    const offset = -(index * 100);
    document.querySelector('.carousel-track').style.transform = `translateX(${offset}%)`;
}

// Función para iniciar el auto deslizamiento
function startAutoSlide() {
    clearInterval(autoSlideInterval);

    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }, intervalTime);
}

// Eventos para las flechas de navegación
document.querySelector('.carousel-button-left').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
    startAutoSlide();  // Reiniciar temporizador
});

document.querySelector('.carousel-button-right').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
    startAutoSlide();  // Reiniciar temporizador
});

// Iniciar el carrusel automáticamente al cargar la página
startAutoSlide();



// Títulos y descripciones correspondientes a cada imagen
const carouselInfo = [
    { title: "Título 1", description: "Descripción de la característica 1." },
    { title: "Título 2", description: "Descripción de la característica 2." },
    { title: "Título 3", description: "Descripción de la característica 3." }
];

// Función para mostrar la imagen y actualizar la información
function showImage(index) {
    images.forEach((image, i) => {
        image.style.transform = `translateX(${(i - index) * 100}%)`;
    });

    // Actualizar la información
    const info = carouselInfo[index];
    document.getElementById('carousel-title').textContent = info.title;
    document.getElementById('carousel-description').textContent = info.description;
}
