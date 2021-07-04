/////// update_portfolio.js

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

////////// forms

const aboutForm = document.querySelector('.about-form');
const contactForm = document.querySelector('.contact-form');
const editProjectForm = document.querySelector('.edit-project-form');
const addProjectForm = document.querySelector('.add-project-form');
const deleteProjectForm = document.querySelector('.delete-project-form');
const addSkillForm = document.querySelector('.add-skill-form');
const editSkillForm = document.querySelector('.edit-skill-form');
const deleteSkillForm = document.querySelector('.delete-skill-form');

///////// colors

const colorFontPicker = document.querySelector('.color-font-picker');
const headingColorLeft = document.querySelector('.heading-color-left');
const paragraphColorLeft = document.querySelector('.paragraph-color-left');
const backgroundColorLeft = document.querySelector('.background-color-left');
const headingColorRight = document.querySelector('.heading-color-right');
const paragraphColorRight = document.querySelector('.paragraph-color-right');
const backgroundColorRight = document.querySelector('.background-color-right');

const rightHeadings = document.querySelectorAll('.right-heading');
const leftHeadings = document.querySelectorAll('.left-heading');
const leftBackground = document.querySelector('.left-column');
const rightBackground = document.querySelector('.right-column');

const userLocationInput = document.querySelector('.user_location')
const userWelcomeInput = document.querySelector('.user_welcome')
const userPitchInput = document.querySelector('.user-pitch')

const userGitHubURL = document.querySelector('.github-url')
const userLinkedInURL = document.querySelector('.linkedin-url')
const userInstagramURL = document.querySelector('.instagram-url')
const userTwitterURL = document.querySelector('.twitter-url')

const userProjectHeading = document.querySelector('.project_heading')
const userProjectDescription = document.querySelector('.project_description')
const userProjectYear = document.querySelector('.project_year')
const userProjectURL = document.querySelector('.project-url')

const userSkillsHeading = document.querySelector('.skills-list-heading')
const userSkillsHeadingList = document.querySelector('.skills-list')

const projectGridDiv = document.querySelector('.projects-grid')

//edit   
const editAboutDiv = document.querySelector('.edit_about_div')
const editAboutMeBtn = document.querySelector('.edit_aboutMe')
const editFontsBtn = document.querySelector('.fontsBtn')
const editContactBtn = document.querySelector('.edit_contact')
const editContactDiv = document.querySelector('.edit_contact_div')
const editProjectsDiv = document.querySelector('.edit_project_div')
const editSkillsBtn = document.querySelector('.edit_skills')
const editSkillsDiv = document.querySelector('.edit_skill_div')

// add 
const addProjectBtn = document.querySelector('.add_projects')
const addProjectDiv = document.querySelector('.add_project_div')
const addSkillsBtn = document.querySelector('.add_skills')
const addSkillsDiv = document.querySelector('.add_skills_div')

// edit color and fonts
const editLeftColorBtn = document.querySelector('.colorLeftBtn')
const editLeftColorDiv = document.querySelector('.left-edit')
const editRightColorBtn = document.querySelector('.colorRightBtn')
const editRightColorDiv = document.querySelector('.right-edit')
const editFontDiv = document.querySelector('.edit_fonts_div')

const exitBtn = document.querySelector('.exit')

const rightHeadingDropDown = document.querySelector('.dropDown-hf-right');
const rightParagraphDropDowns = document.querySelector('.dropDown-pf-right');