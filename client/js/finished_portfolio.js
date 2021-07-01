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
const frontEnd = document.querySelector('.front-end')
const backEnd = document.querySelector('.back-end')
const other = document.querySelector('.other')

axios.get(`/api/portfolios/1`).then(res => {
    let portfolio = res.data;

    populatePage(portfolio);

})

function populatePage(data) {
    console.log(data.message);
    let content = data.results[0]
    addTextContent(content);

    let projectList = content.project_list;
    console.log(projectList);
    projectList.forEach(project => {
        projectsGrid.appendChild(createProject(project))
    })

    let skillList = content.skills[0]
    frontEnd.appendChild(addSkills(skillList['front-end']));
    backEnd.appendChild(addSkills(skillList['back-end']));
    other.appendChild(addSkills(skillList.other));

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

function addSkills(skillList) {
    let list = document.createElement('ul');
    list.className = 'skills-list';
    skillList.forEach(skill => {
        let item = document.createElement('li');
        item.className = 'skills-item'
        item.textContent= skill
        list.appendChild(item)
    })
    return list;
}

const addTextContent =  content => {
    userName.textContent = content.user_name
    userLocation.textContent = content.user_location
    userWelcome.textContent = content.user_welcome
    contactPitch.textContent = content.contact_pitch
    emailAnchor.textContent = content.email;
    emailAnchor.href = content.email;
    githubAnchor.textContent = content.github_url;
    githubAnchor.href = content.github_url;
    copyrightName.textContent = `- ${content.user_name}`;
    linkedin.href = content.linkedin_url;
    instagram.href = content.instagram_url;
    twitter.href = content.twitter_url;
}