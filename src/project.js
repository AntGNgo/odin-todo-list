import { v4 as uuidv4 } from 'uuid';

class Project {
	constructor(name) {
		this.name = name;
		this.list = [];
		this.id = uuidv4();
	}

	addTasktoProject(task) {
		this.list.append(task);
	}

	removeTaskfromProject(taskID) {
		const index = this.list.findIndex((task) => taskID === task.id);
		if (index !== -1) {
			this.list.splice(index, 1);
		}
	}
}

export default Project;
