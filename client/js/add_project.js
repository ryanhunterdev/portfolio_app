// remove this from update_db.js or replace what's in there with this later
addProjectForm.addEventListener("click", event => {
    event.preventDefault();
    let formData = getFormData(addProjectForm);

    axios
        .patch(`/api/portfolios/${portfolioId}/${projectIndex}`, formData)
        .then(res => {
            addProjectDiv.style.display = "none";
            addProjectForm.reset();
            let newData = res.data;
            console.log(newData);
        })

});