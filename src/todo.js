import { v4 as uuidv4 } from 'uuid';
class Todo {
	constructor(name, description, dueDate, priority, project) {
		(this._name = name),
			(this.description = description),
			(this.dueDate = dueDate),
			(this.priority = priority),
			(this.project = project),
			(this.id = uuidv4());
	}
}

export default Todo;
