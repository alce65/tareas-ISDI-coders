import renderHeader from './header.js';
import renderFooter from './footer.js';

function app() {
  console.log('Index loaded');
  renderHeader('.header');
  renderFooter('#footer');
}

document.addEventListener('DOMContentLoaded', app);
