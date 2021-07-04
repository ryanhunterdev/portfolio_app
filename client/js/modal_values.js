portfolioId = url.slice(url.indexOf('t/') + 2)

function updateAboutModalInputs(){
    axios.get(`/api/portfolios/${portfolioId}`).then(res => {
        userLocationInput.value = res.data.results[0].user_location
        userWelcomeInput.value = res.data.results[0].user_welcome
        userPitchInput.value = res.data.results[0].contact_pitch
    })
}

function updateContactModalInputs(){
    axios.get(`/api/portfolios/${portfolioId}`).then(res => {
        userGitHubURL.value = res.data.results[0].github_url
        userLinkedInURL.value = res.data.results[0].linkedin_url
        userInstagramURL.value = res.data.results[0].instagram_url
        userTwitterURL.value = res.data.results[0].twitter_url
    })
}

function updateProjectModalInputs(index){
    console.log(index)
    axios.get(`/api/portfolios/${portfolioId}`).then(res => {
        userProjectHeading.value = res.data.results[0].project_list[index].project_heading
        userProjectDescription.value = res.data.results[0].project_list[index].project_description
        userProjectYear.value = res.data.results[0].project_list[index].project_year   
        userProjectURL.value = res.data.results[0].project_list[index].project_url

        
    })
}

function updateSkillsModalInputs(index){
    axios.get(`/api/portfolios/${portfolioId}`).then(res => {
        console.log(res)
        userSkillsHeading.value = res.data.results[0].skills[index].skills_heading
        userSkillsHeadingList.value = res.data.results[0].skills[index].skills_list
    })
}