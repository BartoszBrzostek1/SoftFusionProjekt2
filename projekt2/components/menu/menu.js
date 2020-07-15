const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');

const handleClick = () => {
	menu.classList.toggle('menu--active');
	nav.classList.toggle('nav--active');
}

menu.addEventListener('click', handleClick);