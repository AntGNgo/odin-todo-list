const newTaskToDOM = (name, description, dueDate, priority, project) => {
	const tasksTable = document.getElementById('tasks-table');
	const tr = document.createElement('tr');

	const tdName = document.createElement('td');
	const tdDescription = document.createElement('td');
	const tdDueDate = document.createElement('td');
	const tdPriority = document.createElement('td');
	const tdProject = document.createElement('td');
	const deleteTd = document.createElement('td');

	const deleteBtn = document.createElement('button');
	deleteBtn.textContent = 'X';

	deleteTd.appendChild(deleteBtn);

	tdName.classList.add('name');
	tdDescription.classList.add('description');
	tdDueDate.classList.add('due-date');
	tdPriority.classList.add('priority');
	tdProject.classList.add('project');

	tdName.textContent = name;
	tdDescription.textContent = description;
	tdDueDate.textContent = dueDate;
	tdPriority.textContent = priority;
	tdProject.textContent = project;

	const tdArray = [tdName, tdDescription, tdDueDate, tdPriority, tdProject];

	tdArray.forEach((td) => {
		tr.appendChild(td);
	});

	tr.appendChild(deleteTd);

	tr.addEventListener('click', () => {
		tr.classList.toggle('completed');
	});

	tasksTable.appendChild(tr);
};

export default newTaskToDOM;
