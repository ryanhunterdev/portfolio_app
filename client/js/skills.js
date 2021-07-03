const addSkillForm = document.querySelector('.add-skill-form');

function updateSkills(skills) {
    removeAllChildNodes(skillsGrid);
    skills.forEach(skill => {
        skillsGrid.appendChild(createSkill(skill))
    })
}

addSkillForm.addEventListener('submit', event => {
    event.preventDefault();

    let formData = getFormData(addSkillForm);

    axios
        .patch(`/api/portfolios/add/skills/${portfolioId}`, formData)
        .then(res => {
            addSkillsDiv.style.display = "none";
            addSkillForm.reset();
            let skills = res.data.skill
            updateSkills(skills)
        })   
})