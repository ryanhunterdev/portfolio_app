const addSkillForm = document.querySelector('.add-skill-form');
const editSkillForm = document.querySelector('.edit-skill-form');
let skillIndex;

skillsGrid.addEventListener('click', event => {
    skillIndex = event.target.parentElement.dataset.index;
})

function updateSkills(skills) {
    removeAllChildNodes(skillsGrid);
    skills.forEach((skill, index) => {
        skillsGrid.appendChild(createSkill(skill, index))
    })
}

editSkillForm.addEventListener('submit', event => {
    event.preventDefault();

    formData = getFormData(editSkillForm);
    axios
        .patch(`/api/skills/${portfolioId}/${skillIndex}`, formData)
        .then(res => {
            editSkillsDiv.style.display = "none";
            editSkillForm.reset();
            let skills = res.data.allSkillss.skills;
            updateSkills(skills);
        })
})

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



