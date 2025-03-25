document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navbar');

  navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      this.classList.add('hover');
    });

    link.addEventListener('mouseout', () => {
      this.classList.remove('hover');
    });
  });
});