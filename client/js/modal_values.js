let userLocationInput = document.querySelector('.user_location')
let userWelcomeInput = document.querySelector('.user_welcome')
let userPitchInput = document.querySelector('.user-pitch')

function updateAboutInputs(){
    axios.get(`/api/portfolios/5`).then(res => {
        console.log(res.data.results[0])
        userLocationInput.value = res.data.results[0].user_location
        userWelcomeInput.value = res.data.results[0].user_welcome
        userPitchInput.value = res.data.results[0].contact_pitch
    })
}


