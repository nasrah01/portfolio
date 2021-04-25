import {gsap} from 'gsap';

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
