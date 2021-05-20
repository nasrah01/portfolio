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
    })

    let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(image, "skewY", "deg"), 
    clamp = gsap.utils.clamp(-20, 20);  

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {
          skew: 0, 
          duration: 1, 
          ease: "power3", 
          overwrite: true, 
          onUpdate: () => skewSetter(proxy.skew)
        });
    }
  }
});

gsap.set(image, {
    transformOrigin: "right center", 
    force3D: true
});
    
};
