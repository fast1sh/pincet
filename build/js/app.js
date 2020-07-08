/* Parallax */
var rellax = new Rellax('.main__bg-part');

/* Show map on hover */
const adressLink = document.querySelector('.adress__link');
const adressMap = document.querySelector('.adress__map');

adressLink.addEventListener("mouseover", function () {
  adressMap.classList.add('adress__map_active');
}, false);

adressLink.addEventListener("mouseout", function () {
  adressMap.classList.remove('adress__map_active');
}, false);

adressMap.addEventListener("mouseover", function () {
  adressMap.classList.add('adress__map_active');
}, false);

adressMap.addEventListener("mouseout", function () {
  adressMap.classList.remove('adress__map_active');
}, false);

/* Modals */

//Get modals
const offerModal = document.getElementById('modal-offer');
const thankModal = document.getElementById('modal-thank');

//Get btns
const headerBtn = document.querySelector('.header__btn');
const heroBtn = document.querySelector('.s-hero__btn');

//Get close btns
const offerClose = document.querySelector('.modal-offer__close');
const thankClose = document.querySelector('.modal-thank__close');

//Get form
const form = document.querySelector('.modal-offer__form');

//Open offer modal
headerBtn.onclick = function () {
  offerModal.style.display = "block";
}
heroBtn.onclick = function () {
  offerModal.style.display = "block";
}

//Close offer modal
offerClose.onclick = function () {
  offerModal.style.display = "none";
}

//Open thank modal on form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  offerModal.style.display = "none";
  thankModal.style.display = "block";
});

//Close thank modal
thankClose.onclick = function () {
  thankModal.style.display = "none";
}

//Close modals if clicked out of modal
window.onclick = function (event) {
  if (event.target == offerModal) {
    offerModal.style.display = "none";
  }

  if (event.target == thankModal) {
    thankModal.style.display = "none";
  }
}

/* Burger menu */
const burgerBtn = document.getElementById('nav__burger');
const menu = document.querySelector('.nav__inner');

burgerBtn.onclick = function () {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

