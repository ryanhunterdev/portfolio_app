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
    console.log(formData);

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



