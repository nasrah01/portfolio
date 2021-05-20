import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);


export const animate = () => {

  const boxes = gsap.utils.toArray('.boxes__box');

  gsap.from(boxes, {
    yPercent: 100,
    opacity: 0,
    ease: "slow(0.7, 0.7, false)",
    duration: 1.5,
    stagger: 1,
    autoAlpha: 1,
    scrollTrigger: {
      trigger: '.about__content',
      start: 'top center',
      scrub: true
    }
  })

};





