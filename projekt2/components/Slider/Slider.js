const track = document.querySelector('.BlokSlider__trackList');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.BlokSlider__button .--prawy');
const prevButton = document.querySelector('.BlokSlider__button .--lewy');
const dotsNavs = document.querySelector('.BlokSlider__nav');
const dots = Array.from(dotsNavs.children);


const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

const setSlide = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlide);

const move = (track, blokSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    blokSlide.classList.remove('BlokiSlider__trackElement');
    targetSlide.classList.add('BlokiSlider__trackElement');
};

nextButton.addEventListener('click', e => {
    const blokSlide = track.querySelector('.BlokSlider__trackElement');
    const nextSlide = blokSlide.nextElementSibling;
    move(track, blokSlide, nextSlide);
})