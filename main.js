document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('main-nav').classList.toggle('show');
    this.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const carouselList = document.querySelector('.carousel-list');
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    // Function to move slide
    const moveSlide = (index) => {
        if (index >= 0 && index < items.length) {
            currentIndex = index;
            const offset = -100 * currentIndex; // Assuming each item takes 100% width
            carouselList.style.transform = `translateX(${offset}%)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[currentIndex].classList.add('active');
        }
    };

     // Optional: Auto slide
     setInterval(() => {
        moveSlide((currentIndex + 1) % items.length);
    }, 5000); // Change slide every 5 seconds

    // Add click event to dots
    dots.forEach((dot, dotIndex) => {
        dot.addEventListener('click', () => {
            moveSlide(dotIndex);
        });
    });
});