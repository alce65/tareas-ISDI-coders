import { TASKS } from '../models/task.data.js';
export default class StoreTasks {
  static storeName = 'Tareas';
  static getTasks() {
    /* return localStorage.getItem(this.storeName)
      ? JSON.parse(localStorage.getItem(this.storeName))
      : TASKS; */
    let data = localStorage.getItem(this.storeName);
    if (data) {
      data = JSON.parse(data);
    } else {
      data = TASKS;
      this.setTasks(data);
    }
    return data;
  }

  static setTasks(tasks) {
    localStorage.setItem(this.storeName, JSON.stringify(tasks));
  }

  static removeTasks() {
    localStorage.removeItem(this.storeName);
  }
}
