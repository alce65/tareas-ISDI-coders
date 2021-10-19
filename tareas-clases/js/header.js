import createMenu from '../../js/menu.js';
import Component from './component.js';

export default class Header extends Component {
  constructor(selector = '') {
    super();
    this.selector = selector;
    this.menuItems = [
      { path: 'index.html', label: 'Tareas' },
      { path: 'about.html', label: 'Nosotros' },
    ];
    this.menu = createMenu(this.menuItems);
    this.template = '';
    this.#createRender();
  }

  #createRender() {
    this.template = `
      <div class="header__logo">
        <img
          class="header__logo-image"
          src="./assets/isdi_coders.png"
          alt="logo"
        />
      </div>
      <div class="header__main">
        <h1 class="header__title">Tareas Dashboard</h1>
        ${this.menu}
      </div>
      `;
    this.render(this.selector, this.template);
  }
}
