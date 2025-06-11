const header = document.getElementById('cabeçalho')

window.addEventListener('scroll', () => {
    if (window.scrollY > 50){
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
}) 

const toggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('header nav');

toggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

const links = document.querySelectorAll('.menu a'); 
links.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
    });
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.scroll-anim').forEach(elem => {
    observer.observe(elem);
  });