class Storage {
	static tasks = [];
	static projects = [];

	static saveToLocalStorage = () => {
		localStorage.setItem(
			'data',
			JSON.stringify({ tasks: [...this.tasks], projects: [...this.projects] })
		);
	};

	static loadFromLocalStorage = () => {
		const data = localStorage.getItem('data');
		console.log(data);
		if (data === null) {
			return;
		}
		const parsedData = JSON.parse(data);
		tasks = parsedData.tasks;
		projects = parsedData.projects;
	};

	static deleteTodo(id) {
		const index = this.tasks.findIndex((task) => task.id === id);
		this.tasks.splice(index, 1);
		this.saveToLocalStorage();
	}

	static findAndReplaceTask(newTask) {
		const taskIndex = this.tasks.findIndex((task) => newTask.id === task.id);
		if (taskIndex !== -1) {
			this.tasks.taskIndex = newTask;
		}
	}
}

export default Storage;
