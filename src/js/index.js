import '../style/main.scss';
import * as PopupWindow from './popupView';
import * as Reveal from './reveal';
import * as Navigation from './navView';
import * as Images from './imageView';
import profile from '../assets/self.jpg';
import weather from '../assets/youtube.jpg';
import project from '../assets/work.jpg';
import login from '../assets/login02.jpg';

Navigation.urlHash();
Navigation.mobileNav();
PopupWindow.popup();
Reveal.animate();
Images.zoomImage();



