// variables definidas
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// listas del evento 
allEventListners();

//  funciones de todos los listados de eventos
function allEventListners() {
 //evento click
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

//funcion de listado
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// funcion click navbar
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}