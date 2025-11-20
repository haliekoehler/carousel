(function () {
  // Initialize the carousel with no auto-slide
  $('.carousel').carousel({ interval: 0 });

  const items = document.querySelectorAll('.carousel-item');
  const controls = document.querySelectorAll('.carousel-control');

  if (controls.length > 0) {
    controls[0].classList.add('active');
  }

  items.forEach((item, i) => {
    item.addEventListener('click', () => {
      if (controls[i]) {
        controls[i].click();
      }
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');

    $('#carousel').on('slid.bs.carousel', () => {
      const activeItem = carousel.querySelector('.carousel-item.active');
      if (activeItem) {
        const container = carousel.querySelector('.carousel-inner');

        const containerWidth = container.offsetWidth;
        const itemWidth = activeItem.offsetWidth;

        // Calculate offset so the item is centered
        const scrollLeft =
          activeItem.offsetLeft - (containerWidth / 2 - itemWidth / 2);

        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    });
  });
})();