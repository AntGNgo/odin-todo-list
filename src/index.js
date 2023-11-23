import Todo from './todo';
import Project from './project';
import Storage from './storage';

let tasks = [{ name: 'run' }];
let projects = [{ name: 'personal' }];

// localStorage.setItem(
// 	'data',
// 	JSON.stringify({
// 		tasks: [{ name: 'Run' }],
// 		projects: [{ name: 'personal', list: ['id-here'] }],
// 	})
// );

const saveToLocalStorage = (tasks, projects) => {
	localStorage.setItem(
		'data',
		JSON.stringify({ tasks: [...tasks], projects: [...projects] })
	);
};

const loadFromLocalStorage = () => {
	const data = localStorage.getItem('data');
	console.log(data);
	if (data === null) {
		return;
	}
	const parsedData = JSON.parse(data);
	tasks = parsedData.tasks;
	projects = parsedData.projects;
};

const newTodo = new Todo('Run', 'Run a lot', '2023-12-11', 'high');

newTodo.changeDescription('Gotta go fast');

console.log(newTodo);
