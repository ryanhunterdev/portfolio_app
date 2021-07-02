CREATE DATABASE jgrs_portfolios;

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
        "skills_heading": "back end",
        "skills_list": ["sinatra", "node", "express", "ruby"]
      }
    ]'
);

UPDATE 
users 
SET skills = skills(value, '{0}', (value->'playersContainer'->'players')
 - 
 (select position-1 from testing, jsonb_array_elements(value->'playersContainer'->'players') with ordinality arr(elem, position) 
 
 WHERE elem->>'id' = '2')::int );

UPDATE users SET
      skills = 
        jsonb_set(
          skills,
          '{0}',  
          skills - 1,
          false
        )
WHERE id=5;

UPDATE users SET skills = json_object_delete_keys(skills, 0);

