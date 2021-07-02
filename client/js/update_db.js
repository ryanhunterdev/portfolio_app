const aboutForm = document.querySelector('.about-form');
const contactForm = document.querySelector('.contact-form');
const colorFontPicker = document.querySelector('.color-font-picker');
const headingColorRight = document.querySelector('.heading-color-right');
const editProjectForm = document.querySelector('.edit-project-form');


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

    let formData = Object.fromEntries(new FormData(aboutForm));

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

    let formData = Object.fromEntries(new FormData(contactForm));
    console.log(formData);
    axios.patch(`/api/portfolios/contact/${portfolioId}`, formData).then(res => {
        console.log(res.data.message);
        let newData = res.data.aboutUpdate
        console.log(newData);
        updateContact(newData);
        editContactDiv.style.display = "none";
    })
});

headingColorRight.addEventListener("input", handleColorChange, false)

function handleColorChange(event) {
    console.log(event.target.value);
    headings = document.querySelectorAll('.right-heading');
    headings.forEach(heading => {
        heading.style.color = event.target.value;
    })
}

let projectIndex;

projectsGrid.addEventListener("click", event => {
    projectIndex = event.target.parentElement.dataset.index;
})


editProjectForm.addEventListener("submit", event => {
    event.preventDefault();
    console.log(projectIndex)
    
    let formData = Object.fromEntries(new FormData(editProjectForm));
    console.log(formData);
    
    axios.patch(`/api/portfolios/${portfolioId}/${projectIndex}`, formData).then(res => {
        console.log(res.data);
        editProjectsDiv.style.display = "none";
    })
})