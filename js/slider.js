let slideIndex = 0;
const slidesToShow = 3;

function moveSlider(n) {
  if (slideIndex < 2) {
    slideIndex += n;
  } else {
    slideIndex = 0;
  }

  showSlides();
}

function showSlides() {
  const slides = document.querySelectorAll('.main__service-item');
  const slideWidth = slides[0].offsetWidth;
  const totalSlides = slides.length;
  const maxIndex = totalSlides - slidesToShow;
  if (slideIndex > maxIndex) slideIndex = maxIndex;
  if (slideIndex < 0) slideIndex = 0;
  const offset = -slideIndex * slideWidth;
  document.querySelector('.slider-inner').style.transform = `translateX(${offset}px)`;
}