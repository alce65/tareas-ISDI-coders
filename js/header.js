import createMenu from '../tareas-clases/js/menu.js';

export default function renderHeader(selector = '') {
  const menuItems = [
    { path: 'index.html', label: 'Tareas' },
    { path: 'about.html', label: 'Nosotros' },
  ];
  const menu = createMenu(menuItems);
  const html = `
  <div class="header__logo">
    <img
      class="header__logo-image"
      src="./assets/isdi_coders.png"
      alt="logo"
    />
  </div>
  <div class="header__main">
    <h1 class="header__title">Tareas Dashboard</h1>
    ${menu}
  </div>
  `;
  const node = document.querySelector(selector);
  node.innerHTML = html;
  //node.outerHTML
}
