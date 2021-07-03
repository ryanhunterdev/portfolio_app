const aboutForm = document.querySelector('.about-form');
const contactForm = document.querySelector('.contact-form');
const colorFontPicker = document.querySelector('.color-font-picker');
const headingColorLeft = document.querySelector('.heading-color-left');
const paragraphColorLeft = document.querySelector('.paragraph-color-left');
const backgroundColorLeft = document.querySelector('.background-color-left');
const headingColorRight = document.querySelector('.heading-color-left');
const paragraphColorRight = document.querySelector('.paragraph-color-left');
const backgroundColorRight = document.querySelector('.background-color-left');
const editProjectForm = document.querySelector('.edit-project-form');
const addProjectForm = document.querySelector('.add-project-form');
const deleteProjectForm = document.querySelector('.delete-project-form');

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

headingColorLeft.addEventListener("input", handleColorChange, false)
headingColorRight.addEventListener("input", handleColorChange, false)
paragraphColorLeft.addEventListener("input", handleColorChange, false)
paragraphColorRight.addEventListener("input", handleColorChange, false)
backgroundColorLeft.addEventListener("input", handleColorChange, false)
backgroundColorRight.addEventListener("input", handleColorChange, false)

function handleColorChange(event) {
    console.log(event.target.className);
    headings = document.querySelectorAll('.left-heading');
    headings.forEach(heading => {
        heading.style.color = event.target.value;
    })
}