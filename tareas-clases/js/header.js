import Component from './component.js';
import Menu from './menu.js';

export default class Header extends Component {
  constructor(selector = '') {
    super();
    this.selector = selector;
    this.menuItems = [
      { path: 'index.html', label: 'Tareas' },
      { path: 'about.html', label: 'Nosotros' },
    ];
    this.menu = new Menu(this.menuItems).createTemplate();
    this.template = this.#createRender();
    this.render(this.selector, this.template);
  }

  #createRender() {
    const template = `
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
    return template;
  }
}
