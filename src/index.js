import Todo from './todo';
import Project from './project';
import Storage from './storage';

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

const taskName = document.getElementById('task-name');
const taskDescription = document.getElementById('task-description');
const taskDue = document.getElementById('task-due');
const taskPriority = document.getElementById('task-priority');
const taskProject = document.getElementById('projects');
const newTaskBtn = document.getElementById('task-add');
