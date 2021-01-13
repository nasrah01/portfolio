import codingPic from '../assets/code.jpg';
import workspace from '../assets/space.jpg';
import weather from '../assets/api.png';
import login from '../assets/login02.png';

export const images = () => {
    const canvas = document.querySelector('.canvas');
    const insertImage = `<img src="${codingPic}" alt="" class="canvas__code"/> <img src="${workspace}" alt=""  class="canvas__workspace"/>`;
    canvas.insertAdjacentHTML('afterend', insertImage);


    const weatherCanvas = document.querySelector('.project__api');
    const weatherImage = `<img src="${weather}" alt="" class="project__image"/>`;
    weatherCanvas.insertAdjacentHTML('afterbegin', weatherImage);

    const loginCanvas = document.querySelector('.project__login');
    const loginImage = `<img src="${login}" alt="" class="project__image"/>`;
    loginCanvas.insertAdjacentHTML('afterbegin', loginImage);
};