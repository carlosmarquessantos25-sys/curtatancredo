let carrossel = document.getElementById('carrossel');

carrossel.addEventListener('wheel', (event) => {
  event.preventDefault();

  carrossel.scrollBy({
    left: event.deltaY < 0 ? -60 : 60,
  });
});