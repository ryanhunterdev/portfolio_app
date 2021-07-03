///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

const projectGridDiv = document.querySelector('.projects-grid')

//edit   
const editAboutDiv = document.querySelector('.edit_about_div')
const editAboutMeBtn = document.querySelector('.edit_aboutMe')
const editContactBtn = document.querySelector('.edit_contact')
const editContactDiv = document.querySelector('.edit_contact_div')
const editProjectsDiv = document.querySelector('.edit_project_div')
const editSkillsBtn = document.querySelector('.edit_skills')
const editSkillsDiv = document.querySelector('.edit_skill_div')

// add 
const addProjectBtn = document.querySelector('.add_projects')
const addProjectDiv = document.querySelector('.add_project_div')
const addSkillsBtn = document.querySelector('.add_skills')
const addSkillsDiv = document.querySelector('.add_skills_div')

// edit color and fonts
const editLeftColorBtn = document.querySelector('.colorLeftBtn')
const editLeftColorDiv = document.querySelector('.left-edit')
const editRightColorBtn = document.querySelector('.colorRightBtn')
const editRightColorDiv = document.querySelector('.right-edit')

const exitBtn = document.querySelector('.exit')


function editAboutMe() {
    editAboutDiv.style.display = "block";
    updateAboutModalInputs()
}

function editContact() {
    editContactDiv.style.display = "block";
    updateContactModalInputs()
}

function editProject() {
    editProjectsDiv.style.display = "block";
}

function editSkills() {
    editSkillsDiv.style.display = "block";
}

function addProject() {
    addProjectDiv.style.display = "block";
}

function addSkill() {
    addSkillsDiv.style.display = "block";
}

function editLeftColorFont() {
    editLeftColorDiv.style.display = 'block';
}

function editRightColorFont() {
    editRightColorDiv.style.display = 'block';
}






window.onclick = function(event) {
        if (event.target !== editLeftColorBtn && !event.target.closest('.left-edit') && editLeftColorDiv.style.display === "block") {
            editLeftColorDiv.style.display = "none";
        } else if (event.target !== editRightColorBtn && !event.target.closest('.right-edit') && editRightColorDiv.style.display === "block") {
            editRightColorDiv.style.display = "none";
        } else if (event.target !== editAboutMeBtn && !event.target.closest('.edit_about_div') && editAboutDiv.style.display === "block"){
            editAboutDiv.style.display = "none";
        } else if (event.target !== editContactBtn && !event.target.closest('.edit_contact_div') && editContactDiv.style.display === "block"){
            editContactDiv.style.display = "none";
        } else if (event.target !== addProjectBtn && !event.target.closest('.add_project_div') && addProjectDiv.style.display === "block"){
            addProjectDiv.style.display = "none";
        } else if (event.target !== addSkillsBtn && !event.target.closest('.add_skills_div') && addSkillsDiv.style.display === "block"){
            addSkillsDiv.style.display = "none";
        }
}

// listeners for buttons
window.addEventListener('click', (e)=>{
    const editProjectsBtns = document.querySelectorAll('.edit_projects')
    if(e.target.classList.contains('edit_projects') && (editProjectsDiv.style.display === "" || editProjectsDiv.style.display === "none")){
        let index = e.target.parentElement.dataset.index
        editProject()
        updateProjectModalInputs(index)
    } else {
        editProjectsBtns.forEach(prjBtn => { 
            if (e.target !== prjBtn && !e.target.closest('.edit_project_div') && editProjectsDiv.style.display === "block" ){
                console.log(`Disabling the popup ${e.target}`)
                editProjectsDiv.style.display = "none";
            } 
        }) 
    }

})

window.addEventListener('click', (e)=>{
    const editSkillsBtns = document.querySelectorAll('.skill-edit-btn')
    if(e.target.classList.contains('skill-edit-btn') && (editSkillsDiv.style.display === "" || editSkillsDiv.style.display === "none")){
        // let index = e.target.parentElement.dataset.index
        editSkills()
        // updateProjectModalInputs(index)
    } 
    else {
        editSkillsBtns.forEach(prjBtn => { 
            if (e.target !== prjBtn && !e.target.closest('.edit_project_div') && editSkillsDiv.style.display === "block" ){
                console.log(`Disabling the popup ${e.target}`)
                editSkillsDiv.style.display = "none";
            } 
        }) 
    }
})

editLeftColorBtn.addEventListener('click', editLeftColorFont);
editRightColorBtn.addEventListener('click', editRightColorFont);
editAboutMeBtn.addEventListener('click', editAboutMe);
editContactBtn.addEventListener('click', editContact);
addProjectBtn.addEventListener('click', addProject);
addSkillsBtn.addEventListener('click', addSkill);








function headingFonts() {

}

function paragraphFonts() {

}
