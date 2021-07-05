# jgrs Porfolios #

### Purpose ###

This web application is for users to create and customise their portfolios.

![example portfolio](/screenshots/example_portfolio.png)

### Use ###

    - Sign up or login to create and customise your own porfolio
    - Click edit section buttons to update your about and contact sections
    - Click the add buttons to add your project and skill lists, jump back to the edit buttons to change the content or delete them if you make a mistake
    - Click the colour and font buttons on the top of the screent to update the style on your page. The colour button on the left controls the colours of the headings, paragraphs and background colour on the left and vice versa on the right. 
    - Once you have completed all your content and style updates click "Go to your finished portfolio" button on the bottom right to generate your new portfolio!

#### Dummy User ####

Email Address: sophie@gmail.com
Password: password123

## Techniques ##

### Technology Used ###
jgrs Portfolios was built using Javascript, HTML, CSS, Node.js and our own API.

### Backlog User Stories ### ##
 
- Add more templates
- URL generates with the user's username
- Email user a link with their URL
- User can customise spacing and layout of their portfolio
- Not have the skills input comma seperated

## Screenshots ##
Log-in page:
![login page](/screenshots/login_screen.png)

Edit portfolio page:
![edit page](/screenshots/edit_page.png)

Ryan's Portfolio:
![ryans portfolio](/screenshots/ryan_portfolio.png)


### Schema ###

  id SERIAL PRIMARY KEY,
  email TEXT,
  password VARCHAR(50),
  user_name TEXT,
  user_location TEXT,
  user_welcome TEXT,
  contact_pitch TEXT,
  github_url TEXT,
  linkedin_url TEXT,
  instagram_url TEXT,
  twitter_url TEXT,
  project_list JSONB,
  skills JSONB, 
  styles JSONB



