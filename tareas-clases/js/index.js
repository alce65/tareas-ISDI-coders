import Header from './header.js';
import renderFooter from './footer.js';

function app() {
  console.log('Index loaded');
  const header = new Header('.header');
  renderFooter('#footer');
}

document.addEventListener('DOMContentLoaded', app);
