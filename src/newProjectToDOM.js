const newProjectToDOM = (project) => {
	const projectList = document.getElementById('created-projects');
	const projectBtn = document.createElement('button');
	const projectOptions = document.getElementById('projects');

	const projectOption = document.createElement('option');
	projectOption.value = project;
	projectOption.textContent = project;

	projectOptions.appendChild(projectOption);

	projectBtn.textContent = project;

	projectList.appendChild(projectBtn);
};

export default newProjectToDOM;
