const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
const carousel = document.getElementById('masBuscados');

btnRight.addEventListener('click', () => {
  carousel.scrollBy({ left: 300, behavior: 'smooth' }); // mueve 300px a la derecha
});

btnLeft.addEventListener('click', () => {
  carousel.scrollBy({ left: -300, behavior: 'smooth' }); // mueve 300px a la izquierda
});