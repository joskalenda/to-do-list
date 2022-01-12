import '../src/style.css';
const taskSection = document.querySelector('.section--task');
const TaskArray = [
  {
    description: 'Wash dishes',
    index: 0,
    completed: true,
  },
  {
    description: 'Go for jogging',
    index: 1,
    completed: true,
  },
  {
    description: 'Join stand up meeting',
    index: 2,
    completed: true,
  }
];

const taskpopulate = () => {
  TaskArray.forEach((items) => {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task--div');
    taskDiv.id = items.index;
    taskDiv.innerHTML = `
    <div class="input--div">
    <input id="check--box" type="checkbox">
    <input id="text--tast" type="text">
    </div>
    <i class="fa fa-ellipsis-v"></i>`;
    taskDiv.querySelector('#text--tast').value = items.description;
    taskDiv.querySelector('#check--box').value = items.completed;
    taskSection.appendChild(taskDiv);
  })
};

taskpopulate();