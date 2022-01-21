import { createTodo, removeTodoItem } from '../src/script.js';

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

  it('should remove an item from the dom', () => {
    const StartingList = '';
    document.querySelector('.main .section--task').innerHTML = StartingList;
    const sample = {
      description: 'TEST 2 ADDED TO LIST',
      index: 1,
      completed: false,
    };
    createTodo(sample);
    const listElement = document.querySelector('.task--div');
    removeTodoItem(listElement);
    const listToRemove = document.querySelectorAll('.task--div');
    expect(listToRemove).toHaveLength(0);
  });
});