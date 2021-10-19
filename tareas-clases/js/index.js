import Header from './header.js';
import Footer from './footer.js';
import Task from './task.js';

function app() {
  console.log('Index loaded');
  new Header('.header');
  new Task('.main');
  new Footer('#footer');
}

document.addEventListener('DOMContentLoaded', app);
