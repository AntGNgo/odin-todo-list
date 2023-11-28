import Todo from './todo';
import newTaskToDOM from './newTaskToDOM';
import Project from './project';
import newProjectToDOM from './newProjectToDOM';
import Storage from './storage';

const taskName = document.getElementById('task-name');
const taskDescription = document.getElementById('task-description');
const taskDue = document.getElementById('task-due');
const taskPriority = document.getElementById('task-priority');
const taskProject = document.getElementById('projects');
const newTaskBtn = document.getElementById('task-add');

const newProjectToggleBtn = document.getElementById('new-project');
const newProjectForm = document.getElementById('new-project-form');

const newProjectInput = document.getElementById('new-project-input');
const newProjectBtn = document.getElementById('new-project-submit');

const createNewTask = (name, description, date, priority, project) => {
	const todo = new Todo(name, description, date, priority, project);
	newTaskToDOM(
		taskName.value,
		taskDescription.value,
		taskDue.value,
		taskPriority.value,
		taskProject.value
	);
	Storage.tasks.push(todo);
	Storage.saveToLocalStorage();
};

const createNewProject = (name) => {
	const project = new Project(name);
	newProjectToDOM(newProjectInput.value);
	Storage.projects.push(project);
	Storage.saveToLocalStorage();
};

newTaskBtn.addEventListener('click', (e) => {
	e.preventDefault();
	if (taskName.value.trim() !== '') {
		createNewTask(
			taskName.value,
			taskDescription.value,
			taskDue.value,
			taskPriority.value,
			taskProject.value
		);
	}
});

newProjectToggleBtn.addEventListener('click', () => {
	newProjectForm.classList.toggle('hidden');
});

newProjectBtn.addEventListener('click', () => {
	if (newProjectInput.value.trim !== '') {
		createNewProject(newProjectInput.value);
		newProjectInput.value = '';
	}
});
