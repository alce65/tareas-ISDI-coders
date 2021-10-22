import TaskModel from '../models/task.model.js';
import StoreTasks from '../services/store.js';
import AddTask from './add-task.js';
import Component from './component.js';

export default class Task extends Component {
  constructor(selector) {
    super();
    this.selector = selector;
    this.taskList = StoreTasks.getTasks();
    this.#updateComponent();
    new AddTask('#formAddTask', this.handlerSubmit.bind(this));
  }

  #updateComponent() {
    console.log(this.taskList);
    this.template = this.#createTemplate();
    this.render(this.selector, this.template);

    // this.#manageForm();
    new AddTask('#formAddTask', this.handlerSubmit.bind(this));
    this.#manageList();
  }

  #createTemplate() {
    let template = `
    <h2>Lista de tareas</h2>
    <div id="formAddTask"></div>
    <ul>`;
    this.taskList.forEach((item, i) => {
      template += `<li>
      <input type="checkbox"
        ${item.isCompleted ? 'checked' : ''}
        id="task-is-completed-${i}"
        data-index="${i}">
      ${item.title} | ${item.responsible}
      <span class="task__delete-button"
      data-index="${i}">🗑</span>
      </li>`;
    });
    template += `</ul>`;
    return template;
  }

  handlerSubmit(ev, inputElements) {
    console.log(ev);
    ev.preventDefault();
    this.taskList.push(
      new TaskModel(inputElements[0].value, inputElements[1].value)
    );
    StoreTasks.setTasks(this.taskList);
    this.#updateComponent();
  }

  #manageList() {
    const componentElement = document.querySelector(this.selector);
    const checkElements = componentElement.querySelectorAll(
      'input[type="checkbox"]'
    );
    const deleteElements = componentElement.querySelectorAll(
      '.task__delete-button'
    );
    checkElements.forEach((item) => {
      item.addEventListener('change', this.handlerCheck.bind(this));
    });
    deleteElements.forEach((item) => {
      item.addEventListener('click', this.handlerClickDelete.bind(this));
    });
  }

  handlerCheck(ev) {
    this.taskList[ev.target.dataset.index].isCompleted =
      !this.taskList[ev.target.dataset.index].isCompleted;
    StoreTasks.setTasks(this.taskList);
  }

  handlerClickDelete(ev) {
    this.taskList.splice(ev.target.dataset.index, 1);
    StoreTasks.setTasks(this.taskList);
    this.#updateComponent();
  }
}
