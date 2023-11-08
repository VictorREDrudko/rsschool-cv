const menuButton = document.querySelector('.menu__button');
const menuActive = document.querySelector('.menu__list');

menuButton.addEventListener('click', () => {
	menuActive.classList.toggle('menu__active')
})


const buttonPlay = document.querySelector('.button-play');
const buttonPause = document.querySelector('.button-pause');
const audio = document.querySelector('.audio');

buttonPlay.addEventListener('click', () => {
	audio.play();
})

buttonPause.addEventListener('click', () => {
	audio.pause();
})

