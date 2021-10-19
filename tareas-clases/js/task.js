import { TASKS } from '../models/task.data.js';
import TaskModel from '../models/task.model.js';
import Component from './component.js';

export default class Task extends Component {
  constructor(selector) {
    super();
    this.selector = selector;
    this.taskList = TASKS;
    this.template = this.#createTemplate();
    this.render(this.selector, this.template);
    this.#manageForm();
  }

  #createTemplate() {
    let formAddTask = `
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
      </form>
    `;

    let template = `
    <h2>Lista de tareas</h2>
    ${formAddTask}
    <ul>`;
    this.taskList.forEach((item) => {
      template += `<li>${item.title} | ${item.responsible}</li>`;
    });
    template += `</ul>`;
    return template;
  }

  #manageForm() {
    const componentElement = document.querySelector(this.selector);
    const inputElements = componentElement.querySelectorAll('input');
    const formElement = componentElement.querySelector('form');
    formElement.addEventListener('submit', (ev) => {
      console.log(ev);
      ev.preventDefault();
      this.taskList.push(
        new TaskModel(inputElements[0].value, inputElements[1].value)
      );
      console.log(this.taskList);
      this.template = this.#createTemplate();
      this.render(this.selector, this.template);
      this.#manageForm();
    });
  }
}
