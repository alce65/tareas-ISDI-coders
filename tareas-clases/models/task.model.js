export default class TaskModel {
  constructor(title = '', responsible = '', isCompleted = false) {
    this.title = title;
    this.responsible = responsible;
    this.isCompleted = isCompleted;
  }
}
