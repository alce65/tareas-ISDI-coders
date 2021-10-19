import Header from './header.js';
import Footer from './footer.js';

function app() {
  console.log('Index loaded');
  new Header('.header');
  new Footer('#footer');
}

document.addEventListener('DOMContentLoaded', app);
