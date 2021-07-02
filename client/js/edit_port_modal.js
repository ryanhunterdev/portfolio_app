///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////


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


const editDiv = document.querySelectorAll('.edit_div')
const popUp = document.querySelectorAll('.pop-up')

// window.onclick = function(event){
        
//     editDiv.forEach(div => {
//         if (!event.target == div) {
//             div.style.display = "none";
//         }
//     })
// }

window.onclick = function(event) {
    if (editAboutDiv.style.display == 'block') {
        editAboutDiv.style.display = "none";
    }
}



// listeners for buttons
editLeftColorBtn.addEventListener('click', editColorFont);
editRightColorBtn.addEventListener('click', editColorFont);
editAboutMeBtn.addEventListener('click', editAboutMe);
editContactBtn.addEventListener('click', editContact);
editProjectsBtn.addEventListener('click', editProject);
addProjectBtn.addEventListener('click', addProject);
editSkillsBtn.addEventListener('click', editSkills);
addSkillsBtn.addEventListener('click', addSkill);


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