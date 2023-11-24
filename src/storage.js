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

	// static findAndReplaceElement(newElement, type) {
	// 	if (type === 'task') {
	// 		const taskIndex = this.tasks.findIndex(
	// 			(task) => newElement.id === task.id
	// 		);
	// 		if (taskIndex !== -1) {
	// 			this.tasks[taskIndex] = newElement;
	// 		}
	// 	} else if (type === 'project') {
	// 		const projectIndex = this.projects.findIndex(
	// 			(project) => newElement.id === project.id
	// 		);
	// 		if (projectIndex !== -1) {
	// 			this.projects[projectIndex] = newElement;
	// 		}
	// 	}
	// }
}

export default Storage;
