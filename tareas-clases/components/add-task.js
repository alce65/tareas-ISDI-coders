import Component from './component.js';

export default class AddTask extends Component {
  constructor(selector, handlerSubmit) {
    super();
    this.selector = selector;
    this.handlerSubmit = handlerSubmit;
    this.template = this.#createTemplate();
    this.render(this.selector, this.template);
    this.#manageForm();
  }

  #createTemplate() {
    const html = `
    <h3>Añadir tarea</h3>
      <form>
        <div class="form-group">
          <label for="task-title">Titulo</label>
          <input type="text"
            class="form-control" name="task-title" id="task-title">
        </div>
        <div class="form-group">
          <label for="task-responsible">Responsable</label>
          <input type="text"
            class="form-control" name="task-responsible" id="task-responsible">
        </div>
        <button type="submit">Añadir</button>
      </form>`;
    return html;
  }

  #manageForm() {
    const componentElement = document.querySelector(this.selector);
    const inputElements =
      componentElement.querySelectorAll('input[type="text"]');
    const formElement = componentElement.querySelector('form');
    formElement.addEventListener('submit', (ev) => {
      console.log('');
      this.handlerSubmit(ev, inputElements);
    });
  }
}
