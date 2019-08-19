let sliderImages = document.querySelectorAll('.img-slide'),
    arrowLeft = document.querySelector('.arrow-left'),
    arrowRight = document.querySelector('.arrow-right'),
    currentImage = 0;

// Скрывает все элементы
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

// Делаем первый элемент видимым, стартуем слайдер
function startSlide() {
  reset();
  sliderImages[currentImage].style.display = 'block';
}

// Слайд влево
function slideLeft() {
  reset();
  sliderImages[currentImage - 1].style.display = 'block';
  currentImage--;
}

// Слайд вправо
function slideRight() {
  reset();
  sliderImages[currentImage + 1].style.display = 'block';
  currentImage++;
}

// Клик по кнопке ВЛЕВО
arrowLeft.addEventListener('click', function () {
  if (currentImage === 0) {
    currentImage = sliderImages.length;
  }
  slideLeft();
});

// Клик по кнопке ВПРАВО
arrowRight.addEventListener('click', function () {
  if (currentImage === sliderImages.length - 1) {
    currentImage = 0;
  }
  slideRight();
});

// Запускаем слайдер
startSlide();


