import { todoList, updateStorage } from './savelist.js';
import setCompleted from './completeTask.js';

const taskSection = document.querySelector('.section--task');
const removeTodoItem = (taskDiv) => {
  todoList.data.splice(taskDiv.id, 1);
  taskDiv.remove();
  updateStorage(todoList.data);
};
const displayTrash = (taskDiv) => {
  const trash = taskDiv.querySelector('.task--div .trash');
  const ellipsis = taskDiv.querySelector('#elips');
  trash.style.display = 'block';
  ellipsis.style.display = 'none';
};

const editTodoItem = (id, newValue) => {
  todoList.data[parseInt(id, 10)].description = newValue;
  updateStorage(todoList.data);
};

export const createTodo = (item) => {
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task--div');
  taskDiv.id = item.index;
  taskDiv.innerHTML = `
  <div class="input--div">
    <input id="check--box" type="checkbox">
    <input id="text--tast" type="text">
  </div>
  <div class="trash">
    <i class="fa fa-trash-o"></i>
  </div>

  <div id="elips">
  <i class="fa fa-ellipsis-v"></i>
  </div>`;

  const inputBox = taskDiv.querySelector('#text--tast');
  const checkboxInput = taskDiv.querySelector('#check--box');
  const ellipsis = taskDiv.querySelector('#elips');
  const trash = taskDiv.querySelector('.task--div .trash');

  inputBox.addEventListener('change', (e) => {
    editTodoItem(taskDiv.id, e.currentTarget.value);
  });

  inputBox.value = item.description;
  inputBox.style.textDecoration = (item.completed && 'line-through') || 'none';
  inputBox.style.color = (item.completed && 'gray') || 'black';
  inputBox.disabled = item.completed;

  checkboxInput.checked = item.completed;

  checkboxInput.addEventListener('change', (e) => {
    setCompleted(e, taskDiv.id, inputBox);
  });

  ellipsis.addEventListener('mousedown', () => {
    displayTrash(taskDiv);
  });

  trash.addEventListener('mousedown', () => {
    removeTodoItem(taskDiv);
  });
  taskSection.appendChild(taskDiv);
};

export const onSubmit = () => {
  const addTodoInput = document.querySelector('.add--div input');
  if (!addTodoInput.value) {
    return;
  }
  const newItem = {
    description: addTodoInput.value,
    completed: false,
    index: todoList.data.length,
  };

  todoList.data.push(newItem);
  updateStorage(todoList.data);
  createTodo(newItem, todoList.data.length - 1);
  addTodoInput.value = '';
  addTodoInput.focus();
};

export const removeCompleted = () => {
  const notCompletedList = todoList.data.filter((i) => !i.completed);
  todoList.data
    .filter((item) => item.completed)
    .map((item) => document.querySelectorAll('div.task--div')[item.index])
    .map((element) => element.remove());
  todoList.data = notCompletedList;
  updateStorage(todoList.data);
  taskSection.querySelectorAll('.task--div').forEach((item, idx) => { item.id = idx; });
};