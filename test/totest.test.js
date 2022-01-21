import { createTodo, removeTodoItem, removeCompleted } from '../src/script.js';
import * as localStorage from '../src/savelist.js';

describe('Manipulating the DOM', () => {
  it('This should add list to THE DOM', () => {
    const StartingList = '<div id="0" class="task--div"></div>';
    document.querySelector('.main .section--task').innerHTML = StartingList;

    const sample = {
      description: 'TEST 2 ADDED TO LIST',
      index: 1,
      completed: false,
    };

    createTodo(sample);
    const listToAdd = document.querySelectorAll('.task--div');
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
  it('This remove completed task', () => {
    // Arrange
    const StartingList = `
      <div id="0" class="task--div"></div>
      <div id="1" class="task--div"></div>
      <div id="2" class="task--div"></div>
    `;
    document.querySelector('.main .section--task').innerHTML = StartingList;
    localStorage.todoList = {
      data: [
        {
          description: 'Item 1',
          completed: true,
          index: 0,
        },
        {
          description: 'Item 2',
          completed: false,
          index: 1,
        },
        {
          description: 'Item 3',
          completed: false,
          index: 2,
        },
      ],
    };
    removeCompleted();
    const result = document.querySelectorAll('.task--div');
    expect(result).toHaveLength(2);
    expect(result[0].id).toBe('0');
    expect(result[1].id).toBe('1');
    expect(localStorage.todoList.data).toHaveLength(2);
    expect(localStorage.todoList.data[0].description).toBe('Item 2');
    expect(localStorage.todoList.data[0].completed).toBe(false);
    expect(localStorage.todoList.data[1].description).toBe('Item 3');
    expect(localStorage.todoList.data[1].completed).toBe(false);
  });
});
