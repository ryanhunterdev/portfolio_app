const aboutForm = document.querySelector('.about-form');


aboutForm.addEventListener('submit', event => {
    event.preventDefault();

    let formData = Object.fromEntries(new FormData(aboutForm));
    // console.log(formData);
    axios.patch(`/api/portfolios/about/${portfolioId}`, formData).then(res => {
        console.log(res.data.message);
        let newData = res.data.aboutUpdate[0];
        userLocation.textContent = newData.user_location;
        userWelcome.textContent = newData.user_welcome;
        contactPitch.textContent = newData.contact_pitch;
        editAboutDiv.style.display = "none";
    })
});