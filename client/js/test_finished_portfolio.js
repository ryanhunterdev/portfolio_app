const userName = document.querySelector('.user-name');
const userLocation = document.querySelector('.user-location');
const userWelcome = document.querySelector('.user-welcome');
const contactPitch = document.querySelector('.contact-pitch');
const emailAnchor = document.querySelector('.email-anchor');
const githubAnchor = document.querySelector('.github-anchor');
const copyrightName = document.querySelector('.copyright-name');
const linkedin = document.querySelector('.linkedin');
const instagram = document.querySelector('.instagram');
const twitter = document.querySelector('.twitter');
const projectsGrid = document.querySelector('.projects-grid');
const skillsGrid = document.querySelector('.skills-grid');
const url = window.location.pathname;

portfolioId = url.slice(url.indexOf('t/') + 2)

axios.get(`/api/portfolios/test/${portfolioId}`).then(res => {
    let portfolio = res.data;

    populatePage(portfolio);

})

function populatePage(data) {
    console.log(data.message);
    let content = data.results[0]
    addTextContent(content);

    let projectList = content.project_list;
    projectList.forEach(project => {
        projectsGrid.appendChild(createProject(project))
    })

    let skills = content.skills
    skills.forEach(skill => {
        skillsGrid.appendChild(createSkill(skill))
    })
    

}

function createProject(project) {
    
    let projectRow = document.createElement('div');
    projectRow.className = 'project-row';

    projectRow.appendChild(addProjectTitle(project));
    projectRow.appendChild(addProjectDescription(project));

    return projectRow;
}

function addProjectTitle(project) {
    let projectTitle = document.createElement('div')
    projectTitle.className = 'project-title'

    let year = document.createElement('p');
    year.className = 'project-year';
    year.textContent = project.project_year
    projectTitle.appendChild(year)

    let heading = document.createElement('h3');
    heading.className = 'project-heading';
    heading.textContent = project.project_heading;
    projectTitle.appendChild(heading);

    return projectTitle;
}

function addProjectDescription(project) {
    let descriptionContainer = document.createElement('div');
    descriptionContainer.className = 'description-container';

    let projectDescription = document.createElement('p');
    projectDescription.className = 'project-description';
    projectDescription.textContent = project.project_description;
    descriptionContainer.appendChild(projectDescription);

    let repoLink = document.createElement('a');
    repoLink.className = 'repo-link';
    repoLink.textContent = 'github';
    repoLink.href = project.project_url;
    descriptionContainer.appendChild(repoLink);

    return descriptionContainer;
}

function createSkill(skill) {
    let skillsContainer = document.createElement('div');
    skillsContainer.className = 'skills-container';

    let skillHeading = document.createElement('h3');
    skillHeading.className = 'skill-heading';
    skillHeading.textContent = skill.skills_heading;
    skillsContainer.appendChild(skillHeading);

    let list = document.createElement('ul');
    list.className = 'skills-list';
    let skillList = skill.skills_list;
    skillList.forEach(entry => {
        let item = document.createElement('li');
        item.className = 'skills-item';
        item.textContent= entry;
        list.appendChild(item);
    })
    skillsContainer.appendChild(list);
    return skillsContainer;
}

const addTextContent =  content => {
    userName.textContent = content.user_name
    userLocation.textContent = content.user_location
    userWelcome.textContent = content.user_welcome
    contactPitch.textContent = content.contact_pitch
    emailAnchor.textContent = content.email;
    emailAnchor.href = `mailto:${content.email}?subject = Feedback&body = Message`;
    githubAnchor.textContent = content.github_url;
    githubAnchor.href = content.github_url;
    copyrightName.textContent = `- ${content.user_name}`;
    linkedin.href = content.linkedin_url;
    instagram.href = content.instagram_url;
    twitter.href = content.twitter_url;
}