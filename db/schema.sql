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
  skills JSONB, 
  styles JSONB
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

UPDATE users
SET styles = '
    {
      "left_background_color": "rgb(255, 255, 255)",
      "right_background_color": "rgb(235, 235, 234);",
      "left_heading_color": "rgb(0,0,0)",
      "right_heading_color": "rgb(0,0,0)",
      "left_para_color": "rgb(0,0,0)",
      "right_para_color": "rgb(0,0,0)",
      "heading_font": "Arial, Helvetica, sans-serif",
      "heading_font": "Arial, Helvetica, sans-serif"
    }
  '
WHERE id = 4;

UPDATE users SET
styles = 
  jsonb_set(
    styles,
    '{0}',  
    '{
        "skills_list": ${skillsList},
        "skills_heading": "${skillsHeading}"
    }',
    false
  )
WHERE id=${userID} returning skills;

UPDATE users
SET styles = jsonb_set(styles, '{left_background_color}', '"rgb(255, 255, 255)"', false)
WHERE id = 4;