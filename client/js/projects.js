let projectIndex;

projectsGrid.addEventListener("click", event => {
    projectIndex = event.target.parentElement.dataset.index;
    console.log(projectIndex);
})

editProjectForm.addEventListener("submit", event => {
    event.preventDefault();
  
    
    let formData = getFormData(editProjectForm);

    
    axios
        .patch(`/api/portfolios/${portfolioId}/${projectIndex}`, formData)
        .then(res => {
            editProjectsDiv.style.display = "none";
            editProjectForm.reset();
            let newData = res.data.allProjects.project_list;
            updateProject(newData);
        })
})

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function updateProject(newData) {
    let allProjects = newData
    removeAllChildNodes(projectsGrid);

    allProjects.forEach((project, index) => {
        projectsGrid.appendChild(createProject(project, index))
    });
}

addProjectForm.addEventListener("submit", event => {
    event.preventDefault();
    let formData = getFormData(addProjectForm);
    axios
        .patch(`/api/portfolios/add/projects/${portfolioId}`, formData)
        .then(res => {
            addProjectDiv.style.display = "none";
            addProjectForm.reset();
            let newData = res.data.project;
            updateProject(newData);
        })
});

deleteProjectForm.addEventListener("submit", event => {
    event.preventDefault();
    
    axios
    .patch(`/api/portfolios/delete/projects/${portfolioId}/${projectIndex}`)
    .then(res => {
        console.log(res)
        editProjectsDiv.style.display = "none";
        editProjectForm.reset();
        deleteProjectForm.reset();
        let newData = res.data.remainingProjects.project_list;
        updateProject(newData);
    })
})