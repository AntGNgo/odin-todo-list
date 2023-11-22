class Storage {
	static storageArray = [];

	static todos = [];
	static projects = [];
	static notes = [];

	static buildStorageArray() {
		this.storageArray.push(this.todos);
		this.storageArray.push(this.projects);
		this.storageArray.push(this.notes);
	}

	static appendTodo(todo) {
		this.todos.push(todo);
	}

	static deleteTodo(id) {}

	static setData() {
		this.buildStorageArray();
		localStorage.setItem('data', JSON.stringify(this.storageArray));
	}

	static getData() {
		const data = localStorage.getItem('data');
		const dataJSON = JSON.parse(data);
		return dataJSON;
	}
}

export default Storage;
