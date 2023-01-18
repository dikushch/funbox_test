let cards = document.querySelectorAll('.f-item');

cards.forEach(e => {
  if (!e.classList.contains('disable')) {
    e.querySelector('.f-item__card').addEventListener('click', () => {
      e.classList.toggle('active');
      e.querySelector('.f-item__card').classList.add('hov');
    });
    e.querySelector('.descr__default--link').addEventListener('click', () => {
      e.classList.add('active');
    });
    e.querySelector('.f-item__card').addEventListener('mouseleave', () => {
      e.querySelector('.f-item__card').classList.remove('hov');
    });
  }
});