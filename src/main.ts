// Import
import './theme/style.css';

import { loadIcons } from './scripts/components/icons.ts';
import { initCarousel } from './scripts/components/carousel.ts';
import { toggle, toggleIcons } from './scripts/components/toggle.ts';





// header shadow
const header = document.querySelector('.c-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 1) {
    header?.classList.add('shadow-custom');
  } else {
    header?.classList.remove( 'shadow-custom');
  }
});


// Navigation button
const navigationButton = document.querySelector('.c-navigation__button');

navigationButton?.addEventListener('click', () => {
  toggleIcons(navigationButton, 'menu', 'close');
});


// Carousel
document.addEventListener("DOMContentLoaded", () => {
  initCarousel({
    slidesContainerId: ".c-carousel__content",
    prevButtonId: ".c-carousel__prev",
    nextButtonId: ".c-carousel__next",
  });
});

// Abbr
document.querySelectorAll('abbr').forEach((element) => {
  const title = element.getAttribute('title');
  if (title) {
    element.setAttribute('aria-label', title);
    element.removeAttribute('title');
  }
});

// Init
loadIcons();
toggle();


