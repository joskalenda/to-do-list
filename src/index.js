import './style.css';
import { todoList, ClearStorage } from './savelist.js';
import { onSubmit, createTodo, removeCompleted } from './script.js';

const populate = () => {
  todoList.data.forEach((item) => {
    createTodo(item);
  });
};

populate();

const addTodoBtn = document.querySelector('.add--div i');
const refresh = document.querySelector('.today-div i');
const clearCompletedBtn = document.querySelector('.section--clear button');
refresh.addEventListener('click', ClearStorage);
addTodoBtn.addEventListener('click', onSubmit);

document.querySelector('.add--task').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    onSubmit();
  }
});

clearCompletedBtn.addEventListener('click', () => {
  removeCompleted();
});