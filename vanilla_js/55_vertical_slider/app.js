const sliderConainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1)*100}vh`;

upBtn.addEventListener('click', () => changeSlide('up'));
downBtn.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
  const sliderHeight = sliderConainer.clientHeight;
  if(direction === 'up') {
    activeSlideIndex++;
    if(activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  }

  slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
}