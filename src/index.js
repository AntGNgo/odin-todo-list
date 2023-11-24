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
};

const task = createNewTask('Run', 'Run a lot', '2022-12-11', 'high');
console.log(task);
console.log(localStorage);
task.name = 'Walk';

Storage.findAndReplaceTask(task);
Storage.saveToLocalStorage(task);

console.log(localStorage);
