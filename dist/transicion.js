let imagen1 = document.querySelector("#img-1");
let slider = document.querySelector("#slider");
let isDragging = false;

// Cuando el usuario hace clic en el slider, activa el arrastre
slider.addEventListener("mousedown", function () {
    isDragging = true;
});

// Cuando el usuario suelta el clic, desactiva el arrastre
window.addEventListener("mouseup", function () {
    isDragging = false;
});

// Solo se mueve si el usuario está arrastrando el slider
window.addEventListener("mousemove", function (e) {
    if (!isDragging) return; // Si no está arrastrando, no hace nada

    let container = document.querySelector(".container");
    let rect = container.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;
    let percentage = (offsetX / rect.width) * 100;

    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;

    slider.style.left = percentage + "%";
    imagen1.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
});