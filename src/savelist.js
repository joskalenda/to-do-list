export const STORAGE_NAME = 'todo-list';
export const updateStorage = (newList) => {
  newList.forEach((item, idx) => {
    item.index = idx;
  });
  localStorage.setItem(STORAGE_NAME, JSON.stringify(newList));
};

export const ClearStorage = () => {
  localStorage.clear();
  window.location.reload();
};
const createTodoList = () => {
  const prevStorage = JSON.parse(localStorage.getItem(STORAGE_NAME));
  if (prevStorage && prevStorage.length) {
    return prevStorage;
  }
  const data = [];
  updateStorage(data);
  return data;
};

export const todoList = {
  data: createTodoList(),
};

export const savedListData = (id) => todoList.data.find((item) => item.index === parseInt(id, 10));