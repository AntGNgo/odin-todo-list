import Todo from './todo';
import Project from './project';
import Storage from './storage';

const newTodo = new Todo('Run', 'Run a lot', '2023-12-11', 'high');

newTodo.changeDescription('Gotta go fast');

console.log(newTodo);
