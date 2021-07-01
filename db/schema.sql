CREATE DATABASE placeBase;


CREATE TABLE placeTable (
  id SERIAL PRIMARY KEY,
  email TEXT,
  password VARCHAR(50),
  first_name TEXT,
  last_name TEXT,
  user_img_url TEXT,
  location TEXT,
  about_section TEXT,
  projects jsonb,
  skills jsonb
);


INSERT INTO placeTable(email, password, first_name, last_name, projects)
VALUES ('beastheart@gmail.com', 'pw', 'Beast', 'Heart', '[{
  "project_name": "TicTacToe",
  "Description": "Its TicTacToe, what else do you want from me",
  "tech_stack": "HTML, CSS, JavaScript",
  "github": "git@gitgit.fornow",
  "url": "ticcyTac.com"
},
 {
    "project_name": "bigDogs",
  "Description": "Lots of photos of big dogs, with comments, and likes and stuff",
  "tech_stack": "HTML, CSS, Ruby on Rails",
  "github": "dog@dogdog.fornow",
  "url": "bigDogs.com"
}
]');


-- CREATE DATABASE jgrs_portfolios

CREATE TABLE users (
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
  skills JSONB
);

INSERT INTO users(
  email, 
  password, 
  user_name,
  user_location,
  user_welcome, 
  contact_pitch, 
  github_url,
  linkedin_url,
  instagram_url,
  twitter_url,
  project_list,
  skills
  )
VALUES (
  'sophie@gmail.com',
  'password123',
  'sophie townsend',
  'sydney',
  'hi i am sophie, a full stacks dev',
  'i am studing dev now so if you want some great code let me know!',
  'https://github.com/stow31',
  'https://linkedin.com/stow31',
  'https://instagram.com/stow31',
  'https://twitter.com/stow31',
  '[
      {
        "project_year": "2021",
        "project_heading": "tic tac toe",
        "project_description": "i built tic tac tow, it was fun and it worked",
        "project_url": "https://github.com/stow31/tic-tac-tow"
      },
      {
        "project_year": "2021",
        "project_heading": "l bry",
        "project_description": "i built a book management tool, it was fun and it worked",
        "project_url": "https://github.com/stow31/l-bry"
      }
    ]',
    '[
      {
        "front-end": ["html", "css", "javascript", "react"],
        "back-end": ["sinatra", "node", "express", "ruby"],
        "other": ["swimming", "reading", "wine"]
      }
    ]'
);
