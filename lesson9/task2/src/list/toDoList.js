import addTask from './createTask';
import { listElem } from './storage';
import { onListClick } from './updateTask';

const initToDoListHandlers = () => {
  const createBtn = document.querySelector('.create-task-btn');
  createBtn.addEventListener('click', addTask);
  listElem.addEventListener('click', onListClick);
};

export { initToDoListHandlers as default };
