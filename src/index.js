import './style/main.scss';
import profilePic from './assets/nasrah1.jpg';
import workspace from './assets/space.jpg';

const canvas = document.querySelector('.canvas');

const insertImage = `<img src="${profilePic}" alt="" class="canvas__profile"/> <img src="${workspace}" alt=""  class="canvas__workspace"/>`;
	canvas.insertAdjacentHTML('afterend', insertImage);