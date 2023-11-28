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

	static deleteElement(id, type) {
		if (type === 'task') {
			const index = this.tasks.findIndex((task) => task.id === id);
			this.tasks.splice(index, 1);
			this.saveToLocalStorage();
		} else if (type === 'task') {
			const index = this.projects.findIndex((project) => project.id === id);
			this.projects.splice(index, 1);
			this.saveToLocalStorage();
		}
	}
}

export default Storage;
