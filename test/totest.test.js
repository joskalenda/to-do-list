import { createTodo, removeTodoItem, editTodoItem, removeCompleted } from '../src/script.js';
import { savedListData } from '../src/savelist.js';
import setCompleted from '../src/marked.js';
import * as localStorage from '../src/savelist.js';

jest.mock('../src/savelist.js');

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

  it('This should renove the List from the Dom', () => {
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

  it('This should Edit the List task sected', () => {
    const ListToEdit = {
      description: 'Colors',
      index: 1,
      completed: false,
    };
    const MockOjbect = {
      currentTarget: {
        value: 'Rainbow',
      },
    };

    savedListData.mockImplementation(() => ListToEdit);

    editTodoItem(MockOjbect, ListToEdit);

    expect(ListToEdit.index).toBe(1);
    expect(ListToEdit.description).toBe('Rainbow');
    expect(ListToEdit.completed).toBe(false);
  });

  it('This should check for completed task', () => {
    const ToSetCompleted = {
      description: 'Colors',
      index: 1,
      completed: false,
    };
    const MockOjbect = {
      currentTarget: {
        checked: true,
      },
    };
    const inputBox = document.createElement('INPUT');
    setCompleted(MockOjbect, ToSetCompleted, inputBox);
    expect(ToSetCompleted.index).toBe(1);
    expect(ToSetCompleted.description).toBe('Colors');
    expect(ToSetCompleted.completed).toBe(true);
  });
  t('This remove completed task', () => {
    // Arrange
    const StartingList = `
      <div id="0" class="task--div"></div>
      <div id="1" class="task--div"></div>
      <div id="2" class="task--div"></div>
    `;
    document.querySelector('.main .section--task').innerHTML = StartingList;
    // mock todoLit items
    localStorage.todoList = {
      data: [
        {
          // this item should be removed
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
    // Act
    removeCompleted();
    // Assert
    const result = document.querySelectorAll('.task--div');
    expect(result).toHaveLength(2); //
    expect(result[0].id).toBe('0');
    expect(result[1].id).toBe('1');
    // two should remain in the todoList
    expect(localStorage.todoList.data).toHaveLength(2);
    // Item 2 should remain and be unmodified
    expect(localStorage.todoList.data[0].description).toBe('Item 2');
    expect(localStorage.todoList.data[0].completed).toBe(false);
    // Item 2 should remain and be unmodified
    expect(localStorage.todoList.data[1].description).toBe('Item 3');
    expect(localStorage.todoList.data[1].completed).toBe(false);
  });
});