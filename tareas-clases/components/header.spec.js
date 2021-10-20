import Header from './header.js';
import { screen } from '@testing-library/dom';

describe('Test fake', () => {
  test('should be true 3 === 3', () => {
    expect(3 === 3).toBe(true);
  });
});

describe('given the component Header', () => {
  describe('when component is instantiated', () => {
    let element;
    beforeEach(() => {
      // Arrange
      document.body.innerHTML = '<header class="header"></header>';
      // Act
      element = new Header('.header');
    });

    test('then it should be rendered', () => {
      // Assert
      expect(element).toBeTruthy();
      expect(screen).toBeTruthy();
      expect(screen.getByText(/Tareas Dashboard/i));
    });
  });
});
