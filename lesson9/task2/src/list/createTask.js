import { setItem } from './storage';
import renderTasks from './renderer';
import { createTask, getTasksList } from './tasksGateway';

const addTask = () => {
  const inputElem = document.querySelector('.task-input');
  const text = inputElem.value;

  if (!text) {
    return;
  }
  inputElem.value = '';

  const newTask = {
    text,
    done: false,
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

export { addTask as default };
