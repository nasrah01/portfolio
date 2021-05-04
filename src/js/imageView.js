import {gsap} from 'gsap';
import codingPic from '../assets/code.jpg';
import workspace from '../assets/coding.jpg';
import weather from '../assets/youtube.jpg';
import login from '../assets/login02.jpg';
import profile from '../assets/self.jpg';
import project from '../assets/workspace.jpg';

const image = document.querySelectorAll('.project__image');

export const zoomImage = () => {
    image.forEach(pic => {
        pic.addEventListener('mousemove', () => {
            gsap.to(pic, {duration: 1, scale: 1.05, ease: "power1.out"})
        })

        pic.addEventListener('mouseleave', () => {
            gsap.to(pic, {duration: 1, scale: 1})
        });
    })
    
};
