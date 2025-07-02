const images = document.querySelectorAll('.slider-image');
let currentIndex = 0;

function showNext() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}

images[0].classList.add('active'); // 첫 이미지 보이게
setInterval(showNext, 5000); // 5초마다 전환
