CREATE TABLE users_types(
  id SERIAL PRIMARY KEY NOT NULL,
  type VARCHAR(100)
);

CREATE TABLE users
(
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  type INT NOT NULL REFERENCES users_types(id)
);

INSERT INTO users_types(type) VALUES ('instructor');
INSERT INTO users_types(type) VALUES ('student');

CREATE USER nodecourseuser WITH PASSWORD 'passpass';

GRANT SELECT, INSERT, UPDATE ON users TO nodecourseuser;
