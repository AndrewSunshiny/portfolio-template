window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    hamburger.style.animationDuration = "1s";
    menu.classList.toggle('menu_active');
  });


  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
    });
  });

  const percentage = document.querySelectorAll('.skills__bar-percentage'),
    lines = document.querySelectorAll('.skills__bar-line');

  percentage.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
  });

  new WOW().init();
});