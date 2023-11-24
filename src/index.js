import Todo from './todo';
import Project from './project';
import Storage from './storage';

localStorage.clear();

const createNewTask = (name, description, date, priority) => {
	const todo = new Todo(name, description, date, priority);
	Storage.tasks.push(todo);
	Storage.saveToLocalStorage();
	return todo;
};

const createNewProject = (name) => {
	const project = new Project(name);
	Storage.projects.push(project);
	Storage.saveToLocalStorage();
};

const task = createNewTask('Run', 'Run a lot', '2022-12-11', 'high');
const taskTwo = createNewTask('swimming', 'swim some', '2022-12-12', 'low');

taskTwo.changeName('Go Diving!');
task.changeName('walk');
Storage.saveToLocalStorage();
// createNewProject('personal');
// task.name = 'Walk';
console.log(localStorage);
