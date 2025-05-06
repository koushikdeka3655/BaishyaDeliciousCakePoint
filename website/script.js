// JavaScript to handle "Order Now" button clicks

document.addEventListener('DOMContentLoaded', () => {
  const orderButtons = document.querySelectorAll('.order-btn');

  orderButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Open the order.html page in a new tab/window
      window.open('order.html', '_blank');
    });
  });

  // Optional: Slideshow functionality for the home section
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    const slides = document.querySelectorAll('.mySlides');
    slides.forEach(slide => slide.style.display = 'none');
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    if (slides[slideIndex - 1]) slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 4000); // Change image every 4 seconds
  }
});
