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