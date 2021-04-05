import {gsap} from "gsap";

export const urlHash = () => {

    const mainNav = document.querySelectorAll('.navigation__item');


    mainNav.forEach((list) => {
        list.addEventListener('click', () => {
            setTimeout(() => {
                removeHash();
            }, 5);
        });
    });

    function removeHash() {
        var uri = window.location.toString(); 
    
        if (uri.indexOf("#") > 0) { 
            var clean_uri = uri.substring(0,  
                            uri.indexOf("#")); 

            window.history.replaceState({},  
                    document.title, clean_uri); 
        } 
    };
};

export const mobileNav = () => {

    const lineOne = document.querySelector('.navigation__one');
    const lineTwo = document.querySelector('.navigation__two');
    const lineThree = document.querySelector('.navigation__three');
    const hamburger = document.querySelector('.navigation__container');
    const screen = document.querySelector('.navigation');
    const list = document.querySelector('.navigation__list');
    const items = document.querySelectorAll('.navigation__item');

    const tl = gsap.timeline({paused: true, reversed: true});

    gsap.globalTimeline.timeScale(.7);


    tl
    .to(lineOne, { y:'-9px', transformOrigin: '50% 50%', duration: .2})
    .to(lineThree, { y:'9px', transformOrigin: '50% 50%', duration: .2}, '-=0.2')
    .to(lineTwo, {scale:0.1, transformOrigin: '50% 50%', duration: .3}, '-=.3')
    .add('rotate')
    .to(lineOne, {y:'5', duration: .3})
    .to(lineThree, {y:'-5',  duration: .3}, '-=.3') 
    .to(lineOne, {rotationZ:45, transformOrigin: '50% 50%', duration: .3})
    .to(lineThree, {rotationZ:-45, transformOrigin: '50% 50%',  duration: .3}, '-=.3') 
    .to(screen,{ css:{height: "70vh"}, ease: "Circ.easeOut" , duration: .5}, '-=.6')
    .to(list, { css: {display: "block", opacity: 1}, ease: "Power1.easeOut", duration: .3}, '-=.2')

    hamburger.addEventListener('click', () => {
        if (tl.reversed()) {
            tl.play();
        } else {
            tl.reverse();
        }    
    }); 

    items.forEach((item)  => {
        item.addEventListener('click',() => {
            tl.reverse();
        });
    }) 

    if(window.innerWidth <= 750) {
        
    }
};
