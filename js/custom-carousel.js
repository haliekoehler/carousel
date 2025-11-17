(function () {
  // Initialize the carousel with no auto-slide
  $('.carousel').carousel({ interval: 0 });

  // Grab items and controls
  const items = document.querySelectorAll('.carousel-item');
  const controls = document.querySelectorAll('.carousel-control');

  // Ensure the first control starts active
  if (controls.length > 0) {
    controls[0].classList.add('active');
  }

  // Link each item to its corresponding control
  items.forEach((item, i) => {
    item.addEventListener('click', () => {
      if (controls[i]) {
        controls[i].click();
      }
    });
  });

  // Scroll active item into view after slide transition
  document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');

    $('#carousel').on('slid.bs.carousel', () => {
      const activeItem = carousel.querySelector('.carousel-item.active');
      if (activeItem) {
        activeItem.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest' // or 'center' depending on layout
        });
      }
    });
  });
})();