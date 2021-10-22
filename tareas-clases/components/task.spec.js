import Task from './task';
import StoreTasks from '../services/store';
import { screen, fireEvent } from '@testing-library/dom';

describe('given the component Tasks', () => {
  let element;
  const selector = '.main';
  beforeEach(() => {
    // Arrange
    document.body.innerHTML = '<main class="main"></main>';
    // Act
    element = new Task(selector);
  });
  describe('when component is instantiated', () => {
    test('then it should be rendered', () => {
      // Arrange
      //Act
      //Assert
      expect(element).toBeTruthy();
      expect(screen).toBeTruthy();
      expect(screen.getByText(/Lista de tareas/i));
    });
  });

  describe('when a new tarea is add', () => {
    test('then it should be show in the list', () => {
      // Arrange - Prepare inputs
      const componentElement = document.querySelector(selector);
      const inputElements =
        componentElement.querySelectorAll('input[type="text"]');

      StoreTasks.setTasks = jest.fn();

      //Act - write inputs and click "Add" Button
      inputElements[0].value = 'Testing Tareas';
      inputElements[1].value = 'Testing User';
      fireEvent(
        screen.getByText('Añadir'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        })
      );

      //Assert - New tarea added to the list
      expect(screen.getByText(/Testing Tareas \| Testing User/i));
      expect(StoreTasks.setTasks).toHaveBeenCalled();
    });
  });
});
