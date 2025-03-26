let imagen1 = document.querySelector("#img-1");
let slider = document.querySelector("#slider");
let container = document.querySelector(".container");
let isDragging = false;

// Asegurar que la imagen se divide a la mitad al cargar la página
window.addEventListener("load", function () {
    let initialPercentage = 50; // Posición inicial al 50%
    slider.style.left = initialPercentage + "%";
    imagen1.style.clipPath = `inset(0 ${100 - initialPercentage}% 0 0)`;
});

// Función para actualizar la posición del slider y la imagen
function updateSlider(e) {
    if (!isDragging) return;

    let rect = container.getBoundingClientRect();
    let clientX = e.touches ? e.touches[0].clientX : e.clientX; // Soporte para touch y mouse
    let offsetX = clientX - rect.left;
    let percentage = (offsetX / rect.width) * 100;

    // Restringir valores entre 0% y 100%
    percentage = Math.max(0, Math.min(100, percentage));

    // Actualizar posición del slider y clip de la imagen
    slider.style.left = percentage + "%";
    imagen1.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
}

// Funciones para manejar el arrastre
function startDragging() {
    isDragging = true;
}

function stopDragging() {
    isDragging = false;
}

// Eventos de ratón
slider.addEventListener("mousedown", startDragging);
window.addEventListener("mouseup", stopDragging);
window.addEventListener("mousemove", updateSlider);

// Eventos táctiles (para móviles)
slider.addEventListener("touchstart", startDragging);
window.addEventListener("touchend", stopDragging);
window.addEventListener("touchmove", updateSlider);
