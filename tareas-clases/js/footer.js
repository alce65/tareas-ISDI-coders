import Component from './component.js';
export default class Footer extends Component {
  constructor(selector) {
    super();
    this.selector = selector;
    this.template = this.#createTemplate();
    this.renderOuter(this.selector, this.template);
  }

  #createTemplate() {
    const title = 'ISDI Coders - Madrid Octubre 2021';
    const today = new Date();
    const html = `
      <footer class="footer">
        <address>${title}</address>
        <p>${today.toLocaleDateString()}</p>
      </footer>
    `;
    return html;
  }
}
