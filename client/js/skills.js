const addSkillForm = document.querySelector('.add-skill-form');

addSkillForm.addEventListener('submit', event => {
    event.preventDefault();

    let formData = getFormData(addSkillForm);

    axios
        .patch(`/api/portfolios/add/skills/${portfolioId}`, formData)
        .then(res => {
            addSkillsDiv.style.display = "none";
            addSkillForm.reset();
            let newData = res.data
            console.log(`add skill response`,  newData);
        })   
})