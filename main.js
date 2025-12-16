const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.navbar__links');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
  });
})

// CarritoHover

document.addEventListener("DOMContentLoaded", () => {
  const cartBox = document.querySelector(".cart-box");
  const cartItem = document.querySelector(".navbar__cart");

  if (!cartBox || !cartItem) return;

  const handleCartClick = (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      e.stopImmediatePropagation(); 
      cartItem.classList.toggle("show-tooltip");
    }
  };

  // Click
  cartBox.addEventListener("click", handleCartClick);

  // Touch
  cartBox.addEventListener("touchstart", handleCartClick);
});