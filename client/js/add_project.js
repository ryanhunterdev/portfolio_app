// remove this from update_db.js or replace what's in there with this later
addProjectForm.addEventListener("submit", event => {
    event.preventDefault();
    let formData = getFormData(addProjectForm);
    console.log(`form data patch: ${formData}`);
    axios
        .patch(`/api/portfolios/add/projects/${portfolioId}`, formData)
        .then(res => {
            addProjectDiv.style.display = "none";
            addProjectForm.reset();
            let newData = res.data.project;
            console.log(newData);
            updateProject(newData);
        })
});