import { v4 as uuidv4 } from 'uuid';
class Todo {
	constructor(name, description, dueDate, priority, project) {
		(this.name = name),
			(this.description = description),
			(this.dueDate = dueDate),
			(this.priority = priority),
			(this.project = project),
			(this.id = uuidv4());
	}

	setName = (name) => {
		return;
	};
}

export default Todo;
