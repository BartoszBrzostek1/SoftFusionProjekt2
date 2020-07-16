const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const navForm = document.querySelector('.navForm');
const clickForm = document.querySelector('.clickForm')

const handleClick = () => {
	menu.classList.toggle('menu--active');
	nav.classList.toggle('nav--active');
}

const handleClickForm = () => {
	navForm.classList.toggle('clickForm--active');
	navForm.classList.toggle('navForm--active');	
}

menu.addEventListener('click', handleClick);
clickForm.addEventListener('click', handleClickForm);