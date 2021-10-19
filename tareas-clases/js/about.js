import Header from './header.js';
import Footer from './footer.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('About loaded');
  new Header('.header');
  new Footer('#footer');
});

/* function app() {

}

document.addEventListener('DOMContentLoaded', app); */
