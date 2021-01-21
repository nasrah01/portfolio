import codingPic from '../../assets/code.jpg';
import workspace from '../../assets/space.jpg';
import weather from '../../assets/api.png';
import login from '../../assets/login02.png';
import profile from '../../assets/self.png';

const apiLink = "https://titan.dcs.bbk.ac.uk/~nabrah01/wd/fma/task2/apiweather.html";
const intranetLink = "https://titan.dcs.bbk.ac.uk/~nabrah01/intranet/index.php";
const profileLink = 'https://nasrah.dev';


function imageTag(image, source) {
    const link = `<a href="${source}" target="_blank"><img src="${image}" alt="" class="project__image"/></a>`
    return link;
}

export const images = () => {
    const canvas = document.querySelector('.canvas');
    const insertImage = `<img src="${codingPic}" alt="" class="canvas__code"/> <img src="${workspace}" alt=""  class="canvas__workspace"/>`;
    canvas.insertAdjacentHTML('afterend', insertImage);


    const weatherCanvas = document.querySelector('.project__api');
    const weatherImage = imageTag(weather, apiLink);
    weatherCanvas.insertAdjacentHTML('afterbegin', weatherImage);

    const loginCanvas = document.querySelector('.project__login');
    const loginImage = imageTag(login, intranetLink);
    loginCanvas.insertAdjacentHTML('afterbegin', loginImage);

    const profileCanvas = document.querySelector('.project__site');
    const profileImage = imageTag(profile, profileLink);
    profileCanvas.insertAdjacentHTML('afterbegin', profileImage);
};