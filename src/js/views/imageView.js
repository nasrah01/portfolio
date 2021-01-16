import codingPic from '../../assets/code.jpg';
import workspace from '../../assets/space.jpg';
import weather from '../../assets/api.png';
import login from '../../assets/login02.png';

const apiLink = "https://titan.dcs.bbk.ac.uk/~nabrah01/wd/fma/task2/apiweather.html";
const intranetLink = "https://titan.dcs.bbk.ac.uk/~nabrah01/intranet/index.php";

export const images = () => {
    const canvas = document.querySelector('.canvas');
    const insertImage = `<img src="${codingPic}" alt="" class="canvas__code"/> <img src="${workspace}" alt=""  class="canvas__workspace"/>`;
    canvas.insertAdjacentHTML('afterend', insertImage);


    const weatherCanvas = document.querySelector('.project__api');
    const weatherImage = `<a href="${apiLink}" target="_blank"><img src="${weather}" alt="" class="project__image"/></a>`;
    weatherCanvas.insertAdjacentHTML('afterbegin', weatherImage);

    const loginCanvas = document.querySelector('.project__login');
    const loginImage = `<a href="${intranetLink}" target="_blank"><img src="${login}" alt="" class="project__image"/></a>`;
    loginCanvas.insertAdjacentHTML('afterbegin', loginImage);
};