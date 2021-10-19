import renderHeader from './header.js';
import renderFooter from './footer.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('About loaded');
  renderHeader('.header');
  renderFooter('#footer');
});

/* function app() {

}

document.addEventListener('DOMContentLoaded', app); */
