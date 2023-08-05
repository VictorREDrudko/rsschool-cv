const menuButton = document.querySelector('.menu__button');
const menuActive = document.querySelector('.menu__list');

menuButton.addEventListener('click', () => {
	menuActive.classList.toggle('menu__active')
})