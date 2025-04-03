document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navbar');
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navbar');

  navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      this.classList.add('hover');
    });

    link.addEventListener('mouseout', () => {
      this.classList.remove('hover');
    });
  });


  burger.addEventListener("click", () => {
    nav.classList.toggle("navbar-active");
    burger.classList.toggle('active');
  });
});