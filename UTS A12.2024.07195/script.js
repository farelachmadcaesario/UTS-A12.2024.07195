document.addEventListener('DOMContentLoaded', function() {
    // Initialize all carousels
    var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleCaptions'), {
        interval: 3000, // Change slide every 5 seconds
        fade: true     // Enable fade transition
    });
});