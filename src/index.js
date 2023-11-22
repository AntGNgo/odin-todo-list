import Storage from './storage';

Storage.setData({
	projects: ['School', 'work', 'personal'],
	todos: [{ name: 'run', project: 'personal' }],
});

const info = Storage.getData();

console.log(info);
