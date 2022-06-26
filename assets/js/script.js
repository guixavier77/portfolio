import initMenuMobile from "./modules/menu-mobile.js";
import initScrollToSection from "./modules/scroll-to-section.js"
import initScrollReveal from "./modules/scroll-reveal.js";
import initBackToTop from "./modules/BackToTop.js";
import SlideNav from "./modules/slide.js";

const slide = new SlideNav('.cards-projetos', '.slide-wrapper');
slide.init();
slide.addControl('.custom-controls');


initMenuMobile();
initScrollToSection();
initScrollReveal();
initBackToTop();
