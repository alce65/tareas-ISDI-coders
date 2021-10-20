import Header from '../components/header.js';
import Footer from '../components/footer.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('About loaded');
  new Header('.header');
  new Footer('#footer');
});

/* function app() {

}

document.addEventListener('DOMContentLoaded', app); */
