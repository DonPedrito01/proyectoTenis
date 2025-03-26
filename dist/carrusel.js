document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    
    const visibleSlides = 3;
    let currentIndex = 0;
    const slideWidthPercentage = 100 / visibleSlides;

    function updateCarousel() {
        const offset = -currentIndex * slideWidthPercentage;
        track.style.transform = `translateX(${offset}%)`;
        
        // Actualizar estado de los botones
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= slides.length - visibleSlides;
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - visibleSlides) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Inicializar
    updateCarousel();

    // Hacer responsive
    window.addEventListener('resize', updateCarousel);
});