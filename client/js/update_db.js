const aboutForm = document.querySelector('.about-form');
const contactForm = document.querySelector('.contact-form');
const colorFontPicker = document.querySelector('.color-font-picker');
const headingColorRight = document.querySelector('.heading-color-right');
const editProjectForm = document.querySelector('.edit-project-form');
const addProjectForm = document.querySelector('.add-project-form');

function getFormData(form) {
    return Object.fromEntries(new FormData(form));
}

/****************************

about me - contact 

*****************************/

const updateAboutMe = newData => {
    userLocation.textContent = newData.user_location;
    userWelcome.textContent = newData.user_welcome;
    contactPitch.textContent = newData.contact_pitch;
}

const updateContact = newData => {
    githubAnchor.textContent = newData.github_url;
    githubAnchor.href = newData.github_url;
    linkedin.href = newData.linkedin_url;
    instagram.href = newData.instagram_url;
    twitter.href = newData.twitter_url;
}

aboutForm.addEventListener('submit', event => {
    event.preventDefault();

    let formData = getFormData(aboutForm);

    axios.patch(`/api/portfolios/about/${portfolioId}`, formData).then(res => {
        console.log(res.data.message);
        let newData = res.data.aboutUpdate;
        console.log(res.data.aboutUpdate);
        updateAboutMe(newData);
        editAboutDiv.style.display = "none";
    })
});

contactForm.addEventListener('submit', event => {
    event.preventDefault();

    let formData = getFormData(contactForm);
    console.log(formData);
    axios.patch(`/api/portfolios/contact/${portfolioId}`, formData).then(res => {
        console.log(res.data.message);
        let newData = res.data.aboutUpdate
        console.log(newData);
        updateContact(newData);
        editContactDiv.style.display = "none";
    })
});

/****************************

color - font changing

*****************************/

headingColorRight.addEventListener("input", handleColorChange, false)

function handleColorChange(event) {
    console.log(event.target.value);
    headings = document.querySelectorAll('.right-heading');
    headings.forEach(heading => {
        heading.style.color = event.target.value;
    })
}

/****************************

projects

*****************************/

let projectIndex;

projectsGrid.addEventListener("click", event => {
    projectIndex = event.target.parentElement.dataset.index;
})


editProjectForm.addEventListener("submit", event => {
    event.preventDefault();
  
    
    let formData = getFormData(editProjectForm);

    
    axios
        .patch(`/api/portfolios/${portfolioId}/${projectIndex}`, formData)
        .then(res => {
            console.log(res)
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