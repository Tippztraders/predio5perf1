// Hero Swiper
new Swiper('.hero-swiper', {
  pagination: { el: '.hero-swiper .swiper-pagination' },
  loop: true,
  autoplay: { delay: 3000 },
});

// Gallery Swiper with dynamic content
const galleryImages = [
  "gallery1.jpg",
  "gallery2.jpg",
  "gallery3.jpg",
  "gallery4.jpg"
];

const galleryWrapper = document.getElementById('gallery-wrapper');

galleryImages.forEach(img => {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';
  slide.innerHTML = `<img src="js/src=image/${img}" alt="${img}">`;
  galleryWrapper.appendChild(slide);
});

new Swiper('.gallery-swiper', {
  pagination: { el: '.gallery-swiper .swiper-pagination' },
  loop: true,
  spaceBetween: 20
});
