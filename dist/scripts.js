let index = 0;
const items = document.querySelectorAll('.slider-item');
const totalItems = items.length;

function nextSlide() {
    index = (index + 1) % totalItems;
    updateSlider();
}

function prevSlide() {
    index = (index - 1 + totalItems) % totalItems;
    updateSlider();
}

function updateSlider() {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${index * 33.33}%)`;
}

setInterval(nextSlide, 3000); // Cambia cada 3 segundos

// Agregar controles de navegación (opcional)
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        prevSlide();
    }
});
