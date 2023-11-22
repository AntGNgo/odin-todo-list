import Todo from './todo';
import Storage from './storage';

Storage.setData({
	projects: ['School', 'work', 'personal'],
	todos: [{ name: 'run', project: 'personal' }],
});

const info = Storage.getData();

const myTodo = new Todo('Run', 'Gotta go fast', 'tonight', 'high', 'none');

console.log(myTodo)

console.log(info);
