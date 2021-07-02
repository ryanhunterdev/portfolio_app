///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
console.log('file is connected')

const projectGridDiv = document.querySelector('.projects-grid')

//edit   
const editAboutDiv = document.querySelector('.edit_about_div')
const editAboutMeBtn = document.querySelector('.edit_aboutMe')
const editContactBtn = document.querySelector('.edit_contact')
const editContactDiv = document.querySelector('.edit_contact_div')
const editProjectsBtn = document.querySelector('.edit_projects')
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
const editColorDiv = document.querySelector('.edit_fontsColors_div')
const editRightColorBtn = document.querySelector('.colorRightBtn')

const exitBtn = document.querySelector('.exit')

function editAboutMe() {
    return editAboutDiv.style.display = "block";
}

function editContact() {

    return editContactDiv.style.display = "block";
}

function editProject() {

    return editProjectsDiv.style.display = "block";
}

function editSkills() {

    return editSkillsDiv.style.display = "block";
}

function addProject() {

    return addProjectDiv.style.display = "block";
}

function addSkill() {

    return addSkillsDiv.style.display = "block";
}

function editColorFont() {

    return editColorDiv.style.display = 'block';
}


// const editDivs = document.querySelectorAll('.edit_div')
// const popUp = document.querySelectorAll('.pop-up')
// if ( editAboutDiv.style.display === 'block' ){
//     window.addEventListener('click', (e)=>{
//         console.log(e.target.parentNode)
//         if (e.target.parentNode !== editAboutDiv) {
//             editAboutDiv.style.display = "none";
//           }
//     })
// }



// listeners for buttons
// projectGridDiv.addEventListener('click', (e)=>{
//     if(e.target.classList.contains('edit_projects')){
//         editProject()
//     }
// })
editLeftColorBtn.addEventListener('click', editColorFont);
editRightColorBtn.addEventListener('click', editColorFont);
editAboutMeBtn.addEventListener('click', editAboutMe);
editContactBtn.addEventListener('click', editContact);
addProjectBtn.addEventListener('click', addProject);
editSkillsBtn.addEventListener('click', editSkills);
addSkillsBtn.addEventListener('click', addSkill);
window.onclick = function(event) {
    if (editAboutDiv.style.display == 'block') {
        editAboutDiv.style.display = "none";
    }
}


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
