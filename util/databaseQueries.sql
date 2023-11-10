CREATE TABLE users (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    email VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    password_hash VARCHAR(50) NOT NULL,
);

INSERT INTO users
 ( email, username, password_hash )
VALUES
('charadrim@yahoo.gr', 'charadrim', 'charadrim');

SELECT * FROM users;
