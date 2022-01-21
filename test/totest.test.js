import { createTodo } from '../src/script.js';

describe('Manipulating the DOM', () => {
  it('This should add list to THE DOM', () => {
    // Arrange
    const StartingList = '<div id="0" class="task--div"></div>';
    document.querySelector('.main .section--task').innerHTML = StartingList;

    const sample = {
      description: 'TEST 2 ADDED TO LIST',
      index: 1,
      completed: false,
    };

    // Act
    createTodo(sample);
    const listToAdd = document.querySelectorAll('.task--div');
    // Assert
    expect(listToAdd).toHaveLength(2);
  });
});