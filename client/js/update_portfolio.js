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
const url = window.location.pathname;

portfolioId = url.slice(url.indexOf('t/') + 2)

axios.get(`/api/portfolios/${portfolioId}`).then(res => {
    let portfolio = res.data;

    populatePage(portfolio);

})

function populatePage(data) {

    console.log(data.message);
    let content = data.results[0]
    addTextContent(content);

    let projectList = content.project_list;
    projectList.forEach((project, index) => {
        projectsGrid.appendChild(createProject(project, index))
    })

    let skills = content.skills
    console.log('load skills: ', skills);
    skills.forEach((skill, index) => {
        skillsGrid.appendChild(createSkill(skill, index))
    })
}

function createProject(project, index) {
    
    let projectRow = document.createElement('div');
    projectRow.className = 'project-row';

    projectRow.appendChild(addProjectTitle(project, index));
    projectRow.appendChild(addProjectDescription(project));
    return projectRow;
}



function addProjectTitle(project, index) {
    let projectTitle = document.createElement('div')
    projectTitle.className = 'project-title'
    projectTitle.dataset.index = index;

    let year = document.createElement('p');
    year.className = 'project-year';
    year.classList.add('para');
    year.textContent = project.project_year
    projectTitle.appendChild(year)

    let heading = document.createElement('h3');
    heading.className = 'project-heading';
    heading.classList.add('right-heading');
    heading.classList.add('headingfont');
    heading.textContent = project.project_heading;
    projectTitle.appendChild(heading);
    projectTitle.appendChild(addProjectEditButton())

    return projectTitle;
}

function addProjectDescription(project) {
    let descriptionContainer = document.createElement('div');
    descriptionContainer.className = 'description-container';

    let projectDescription = document.createElement('p');
    projectDescription.className = 'project-description';
    projectDescription.classList.add('para')
    projectDescription.textContent = project.project_description;
    descriptionContainer.appendChild(projectDescription);

    let repoLink = document.createElement('a');
    repoLink.className = 'repo-link';
    repoLink.classList.add('para');
    repoLink.textContent = 'github';
    repoLink.href = project.project_url;
    descriptionContainer.appendChild(repoLink);

    return descriptionContainer;
}

function addProjectEditButton() {
    const editBtn = document.createElement('button');
    editBtn.className = 'edit_projects'
    editBtn.classList.add('page-edit-btn')
    editBtn.classList.add('para')
    editBtn.textContent = 'edit project'
    return editBtn;
}

function addSkillEditButton() {
    const editBtn = document.createElement('button');
    editBtn.className = 'skill-edit-btn'
    editBtn.classList.add('para')
    editBtn.textContent = 'edit'
    return editBtn;
}

function createSkillHeading(skill) {
    let skillHeading = document.createElement('h3');
    skillHeading.className = 'skill-heading';
    skillHeading.classList.add('right-heading')
    skillHeading.classList.add('heading-font')
    skillHeading.textContent = skill.skills_heading;
    return skillHeading;
}

function createSkillList(skill) {
    let list = document.createElement('ul');
    list.className = 'skills-list';
    let skillList = skill.skills_list;
    skillList.forEach(entry => {
        let item = document.createElement('li');
        item.className = 'skills-item';
        item.classList.add('para');
        item.textContent= entry;
        list.appendChild(item);
    })
    return list;
}

function createSkill(skill, index) {
    const skillsContainer = document.createElement('div');
    skillsContainer.className = 'skills-container';

    const skillHeadingContainer = document.createElement('div');
    skillHeadingContainer.className = 'skill-heading-container'
    skillHeadingContainer.appendChild(createSkillHeading(skill));
    skillHeadingContainer.appendChild(addSkillEditButton());
    skillHeadingContainer.dataset.index = index;

    skillsContainer.appendChild(skillHeadingContainer);

    skillsContainer.appendChild(createSkillList(skill));
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