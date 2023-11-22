import Todo from './todo';
import Project from './project';
import Storage from './storage';

// Storage.setData({
// 	projects: ['School', 'work', 'personal'],
// 	todos: [{ name: 'run', project: 'personal' }],
// });

const myTodo = new Todo('Run', 'Gotta go fast', 'tonight', 'high', 'personal');

const personalProject = new Project('personal');

personalProject.addTodo(myTodo);

console.log(personalProject.list);

personalProject.removeTodo(myTodo.id);
console.log(personalProject.list);

const newInfo = Storage.getData();

console.log(newInfo);
