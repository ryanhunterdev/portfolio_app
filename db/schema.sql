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
  skills jsonb,
);


INSERT INTO placeTable(email, password, first_name, last_name)
VALUES ('beastheart@gmail.com', 'pw', 'Beast', 'Heart');