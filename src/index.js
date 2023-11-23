import Todo from './todo';
import Project from './project';
import Storage from './storage';

// Storage.setData({
// 	projects: ['School', 'work', 'personal'],
// 	todos: [{ name: 'run', project: 'personal' }],
// });

const personalProj = new Project('personal');
Storage.addProject(personalProj);

const myTodo = new Todo('Run', 'Gotta go fast', 'tonight', 'high', 'personal');

if (Storage.projects.includes(myTodo.project)) {
	personalProj.addTodo(myTodo);
}

console.log(Storage.projects);
console.log(personalProj);

// How to get tasks?
/* 
    Theres going to be an array of all tasks that can be used to show all tasks

    Everytime new task is added, push to this array and render the list

    If the task has a project associated, push the task id to the project

    To render the project, loop through the ids of the project and find the id in the main todo array and show it

*/

/* 
    How to assign a task to a project

    Project needs to be created first before a task can be assigned to one

    When a project is created add it to the array

*/
