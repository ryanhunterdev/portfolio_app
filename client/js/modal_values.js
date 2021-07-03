let userLocationInput = document.querySelector('.user_location')
let userWelcomeInput = document.querySelector('.user_welcome')
let userPitchInput = document.querySelector('.user-pitch')

let userGitHubURL = document.querySelector('.github-url')
let userLinkedInURL = document.querySelector('.linkedin-url')
let userInstagramURL = document.querySelector('.instagram-url')
let userTwitterURL = document.querySelector('.user-pitch')

// un-hard code the user id here 

function updateAboutInputs(){
    axios.get(`/api/portfolios/5`).then(res => {
        console.log(res.data.results[0])
        userLocationInput.value = res.data.results[0].user_location
        userWelcomeInput.value = res.data.results[0].user_welcome
        userPitchInput.value = res.data.results[0].contact_pitch
    })
}

function updateContactInputs(){
    axios.get(`/api/portfolios/5`).then(res => {
        console.log(res.data.results[0])
        
        userLocationInput.value = res.data.results[0].user_location
        userWelcomeInput.value = res.data.results[0].user_welcome
        userPitchInput.value = res.data.results[0].contact_pitch
    })
}
