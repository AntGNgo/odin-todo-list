class Project {
	constructor(name) {
		this.name = name;
		this.list = [];
	}

	addTodo(todo) {
		this.list.push(todo.id);
	}

	removeTodo(id) {
		const index = this.list.indexOf(id);
		this.list.splice(index, 1);
	}
}

export default Project;
