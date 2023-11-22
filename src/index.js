import Todo from './todo';
import Storage from './storage';

// Storage.setData({
// 	projects: ['School', 'work', 'personal'],
// 	todos: [{ name: 'run', project: 'personal' }],
// });

localStorage.removeItem('data');
const info = Storage.getData();
console.log(info);

const myTodo = new Todo('Run', 'Gotta go fast', 'tonight', 'high', 'none');
Storage.appendTodo(myTodo);
Storage.setData();

const newInfo = Storage.getData();

console.log(newInfo);
