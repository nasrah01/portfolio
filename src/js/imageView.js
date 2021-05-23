import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

const image = document.querySelectorAll('.project__image');

export const zoomImage = () => {
    image.forEach(pic => {
        pic.addEventListener('mousemove', () => {
            gsap.to(pic, {
                duration: 1, 
                scale: 1.05, 
                ease: "power1.out"
            })
        })

        pic.addEventListener('mouseleave', () => {
            gsap.to(pic, {
                duration: 1, 
                scale: 1
            })
        });
    });


    function animateFrom(elem) {
       
        gsap.fromTo(elem, {x: -100, autoAlpha: 0, opacity: 0}, {
          duration: 1.25, 
          x: 0, 
          opacity: 1,
          autoAlpha: 1, 
          ease: "expo", 
          overwrite: "auto"
        });
      }
      
      function hide(elem) {
        gsap.set(elem, {autoAlpha: 0});
      }
      
      document.addEventListener("DOMContentLoaded", function() {
        gsap.registerPlugin(ScrollTrigger);
        
        gsap.utils.toArray(".project__left").forEach(function(elem) {
          hide(elem); // assure that the element is hidden when scrolled into view
          
          ScrollTrigger.create({
            trigger: elem,
            onEnter: function() { animateFrom(elem) }, 
            onEnterBack: function() { animateFrom(elem) },
            onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
          });
        });
      });
    
};
