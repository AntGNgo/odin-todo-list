import { v4 as uuidv4 } from 'uuid';
import { format, parse } from 'date-fns';
class Todo {
	constructor(name, description, dueDate, priority) {
		(this.name = name),
			(this.description = description),
			(this.dueDate = parse(dueDate, 'yyyy-MM-dd', new Date())),
			(this.priority = priority),
			(this.completed = false),
			(this.id = uuidv4());
	}

	completeTask() {
		this.completed = !this.completed;
	}

	changeName(newName) {
		this.name = newName;
	}

	changeDescription(newDescription) {
		this.description = newDescription;
	}

	changeDueDate(newDate) {
		this.dueDate = format(newDate, 'yyyy-MM-dd');
	}

	changePriority(newPriority) {
		this.priority = newPriority;
	}
}

export default Todo;
