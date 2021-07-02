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
// const editSkillsBtn = document.querySelector('.edit_skills')
const editSkillsDiv = document.querySelector('.edit_skill_div')

// add 
const addProjectBtn = document.querySelector('.add_projects')
const addProjectDiv = document.querySelector('.add_project_div')
const addSkillsBtn = document.querySelector('.add_skills')
const addSkillsDiv = document.querySelector('.add_skills_div')

// edit color and fonts
const editLeftColorBtn = document.querySelector('.colorLeftBtn')
const editColorDiv = document.querySelector('.edit_fontsColors_div')
const editRightColorBtn = document.querySelector('.colorRightBtn')

const exitBtn = document.querySelector('.exit')

function editAboutMe() {
    editAboutDiv.style.display = "block";
}

function editContact() {
    editContactDiv.style.display = "block";
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

function editColorFont() {
    editColorDiv.style.display = 'block';
}



window.onclick = function(event) {
    const editProjectsBtns = document.querySelectorAll('.edit_projects')

        if (event.target !== editRightColorBtn && !event.target.closest('.edit_fontsColors_div') && editColorDiv.style.display === "block") {
        editColorDiv.style.display = "none";
        } else if (event.target !== editAboutMeBtn && !event.target.closest('.edit_about_div') && editAboutDiv.style.display === "block"){
            editAboutDiv.style.display = "none";
        } else if (event.target !== editContactBtn && !event.target.closest('.edit_contact_div') && editContactDiv.style.display === "block"){
            editContactDiv.style.display = "none";
        } 

        editProjectsBtns.forEach(prjBtn => { 
            if (event.target !== prjBtn && !event.target.closest('.edit_project_div') && editProjectsDiv.style.display === "block" ){
                console.log(event.target);
            } 
        })
}
// && !event.target.closest('.edit_project_div') && editProjectsDiv.style.display === "block"

// listeners for buttons
projectGridDiv.addEventListener('click', (e)=>{
    if(e.target.classList.contains('edit_projects')){
        editProject()
    }
})
editLeftColorBtn.addEventListener('click', editColorFont);
editRightColorBtn.addEventListener('click', editColorFont);
editAboutMeBtn.addEventListener('click', editAboutMe);
editContactBtn.addEventListener('click', editContact);

// -----------------------------------------------------
//the toogle for the left or right side of the page

const switchValue = document.querySelector('.switch input')

    if (switchValue.checked){
		//assign class to make it appear on the right
    } else {
		//assign class to make it appear on the left
    }


// ----------------------------------------------------


function headingFonts() {

}

function paragraphFonts() {

}
