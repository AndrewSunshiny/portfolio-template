window.addEventListener('DOMContentLoaded', () => {
  "use strict";

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

  function validateForm(form) {
    $(form).validate({
      rules: {
        name: "required",
        email: {
          required: true,
          email: true
        },
        policy: "required"
      },
      messages: {
        name: "Пожалуйста, введите свое имя",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Пожалуйста, введите существующую почту"
        },
        policy: "Вам необходимо дать согласие на обработку персональных данных"
      }
    });
  }

  validateForm('.contacts__form');

  new WOW().init();
});