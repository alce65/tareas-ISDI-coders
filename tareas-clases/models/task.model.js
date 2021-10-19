export default class Task {
  constructor(title = '', responsible = '', isCompleted = false) {
    this.title = title;
    this.responsible = responsible;
    this.isCompleted = isCompleted;
  }
}
