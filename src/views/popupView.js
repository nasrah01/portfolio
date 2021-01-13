const container = document.getElementById('popup');
const open = document.querySelector('.popup__window');
const close = document.querySelector('.popup__close');
    
export const popup = () => {

	container.addEventListener('click', () => {
		open.style.display = 'block';
	});

	close.addEventListener('click', () => {
		open.style.display = 'none';
	});
};