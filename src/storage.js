class Storage {
	static tasks = [{ name: 'run' }];
	static projects = [{ name: 'personal' }];

	static saveToLocalStorage = (tasks, projects) => {
		localStorage.setItem(
			'data',
			JSON.stringify({ tasks: [...tasks], projects: [...projects] })
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
}

export default Storage;
