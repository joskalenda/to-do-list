import { createTodo } from '../src/script';

describe('Manipulating the DOM', () => {
  it('This should add list to THE DOM', () => {
    // Arrange
    const Starting_List = '<div id="0" class="task--div"></div>';
    document.querySelector('.main .section--task').innerHTML = Starting_List;

    const sample = {
      description: 'TEST 2 ADDED TO LIST',
      index: 1,
      completed: false,
    };

    // Act
    createTodo(sample);
    const list_to_add = document.querySelectorAll('.task--div');
    // Assert
    expect(list_to_add).toHaveLength(2);
  });

});