import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Task from '../components/task.js';

function app() {
  console.log('Index loaded');
  new Header('.header');
  new Task('.main');
  new Footer('#footer');
}

document.addEventListener('DOMContentLoaded', app);
