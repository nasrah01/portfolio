import '../style/main.scss';
import * as SiteImage from './views/imageView';
import * as PopupWindow from './views/popupView';
import * as Carouselbox from './views/carouselView';
import * as Navigation from './views/navView';

Navigation.urlHash();
Navigation.mobileNav();
SiteImage.images();
PopupWindow.popup();
Carouselbox.carousel();




