import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

export const animate = () => {
  function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if(elem.classList.contains("boxes__box--02")) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains("boxes__box--04")) {
      x = 100;
      y = 0;
    }
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0, opacity: 0}, {
      duration: 1.25, 
      x: 0,
      y: 0, 
      autoAlpha: 1,
      opacity: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
  }
  
  function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".boxes__box").forEach(function(elem) {
      hide(elem);
      
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) }
      });
    });
  });
};





