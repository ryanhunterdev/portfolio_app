portfolioId = url.slice(url.indexOf('t/') + 2)

let pageStyles;

axios.get(`/api/portfolios/${portfolioId}`).then(res => {
    let portfolio = res.data;
    pageStyles = portfolio.results[0].styles
    console.log(pageStyles);
    populatePage(portfolio);

})

function populatePage(data) {

    let content = data.results[0]
    addTextContent(content);

    let projectList = content.project_list;
    projectList.forEach((project, index) => {
        projectsGrid.appendChild(createProject(project, index, content.styles))
    })

    let skills = content.skills
    console.log('load skills: ', skills);
    skills.forEach((skill, index) => {
        skillsGrid.appendChild(createSkill(skill, index, content.styles))
    })

    addStyles(content.styles);
}

function createProject(project, index, styles) {
    
    let projectRow = document.createElement('div');
    projectRow.className = 'project-row';

    projectRow.appendChild(addProjectTitle(project, index, styles));
    projectRow.appendChild(addProjectDescription(project, styles));
    return projectRow;
}

function addStyles(styles) {

    leftHeadings.forEach(heading => {
        heading.style.color = styles.left_heading_color
        heading.style.fontFamily = styles.heading_font
    });
    leftPara.forEach(para => {
        para.style.color = styles.left_para_color
        para.style.fontFamily = styles.paragraph_font
    });
    rightHeadings.forEach(heading => {
        heading.style.color = styles.right_heading_color
        heading.style.fontFamily = styles.heading_font
    });
    leftBackground.style.backgroundColor = styles.left_background_color
    rightBackground.style.backgroundColor = styles.right_background_color
}

function addProjectTitle(project, index, styles) {
    let projectTitle = document.createElement('div')
    projectTitle.className = 'project-title'
    projectTitle.dataset.index = index;

    let year = document.createElement('p');
    year.className = 'project-year';
    year.classList.add('para');
    year.classList.add('right-para');
    year.textContent = project.project_year
    year.style.color = styles.right_para_color
    year.style.fontFamily = styles.paragraph_font
    projectTitle.appendChild(year)

    let heading = document.createElement('h3');
    heading.className = 'project-heading';
    heading.classList.add('right-heading');
    heading.classList.add('headingfont');
    heading.textContent = project.project_heading;
    heading.style.color = styles.right_heading_color;
    heading.style.fontFamily = styles.heading_font;
    projectTitle.appendChild(heading);
    projectTitle.appendChild(addProjectEditButton())

    return projectTitle;
}

function addProjectDescription(project, styles) {
    let descriptionContainer = document.createElement('div');
    descriptionContainer.className = 'description-container';

    let projectDescription = document.createElement('p');
    projectDescription.className = 'project-description';
    projectDescription.classList.add('para');
    projectDescription.classList.add('right-para');
    projectDescription.textContent = project.project_description;
    projectDescription.style.color = styles.right_para_color;
    projectDescription.style.fontFamily = styles.paragraph_font
    descriptionContainer.appendChild(projectDescription);

    let repoLink = document.createElement('a');
    repoLink.className = 'repo-link';
    repoLink.classList.add('para');
    repoLink.classList.add('right-para');
    repoLink.textContent = 'github';
    repoLink.href = project.project_url;
    repoLink.style.color = styles.right_para_color;
    repoLink.style.fontFamily = styles.paragraph_font
    descriptionContainer.appendChild(repoLink);

    return descriptionContainer;
}

function addProjectEditButton() {
    const editBtn = document.createElement('button');
    editBtn.className = 'edit_projects'
    editBtn.classList.add('page-edit-btn')
    editBtn.textContent = 'edit project'
    return editBtn;
}

function addSkillEditButton() {
    const editBtn = document.createElement('button');
    editBtn.className = 'skill-edit-btn'
    editBtn.textContent = 'edit'
    return editBtn;
}

function createSkillHeading(skill, styles) {
    let skillHeading = document.createElement('h3');
    skillHeading.className = 'skill-heading';
    skillHeading.classList.add('right-heading')
    skillHeading.classList.add('headingfont')
    skillHeading.style.color = styles.right_heading_color
    skillHeading.textContent = skill.skills_heading;
    skillHeading.style.fontFamily = styles.heading_font
    return skillHeading;
}

function createSkillList(skill, styles) {
    let list = document.createElement('ul');
    list.className = 'skills-list';
    let skillList = skill.skills_list;
    skillList.forEach(entry => {
        let item = document.createElement('li');
        item.className = 'skills-item';
        item.classList.add('para');
        item.classList.add('right-para');
        item.style.color = styles.right_para_color;
        item.style.fontFamily = styles.heading_font
        item.textContent= entry;
        list.appendChild(item);
    })
    return list;
}

function createSkill(skill, index, styles) {
    const skillsContainer = document.createElement('div');
    skillsContainer.className = 'skills-container';

    const skillHeadingContainer = document.createElement('div');
    skillHeadingContainer.className = 'skill-heading-container'
    skillHeadingContainer.appendChild(createSkillHeading(skill, styles));
    skillHeadingContainer.appendChild(addSkillEditButton());
    skillHeadingContainer.dataset.index = index;

    skillsContainer.appendChild(skillHeadingContainer);

    skillsContainer.appendChild(createSkillList(skill, styles));
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