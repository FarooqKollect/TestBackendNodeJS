CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

CREATE TABLE users(
    user_id serial PRIMARY KEY,
    user_name VARCHAR (255),
	account_number VARCHAR ( 100 ) UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
    user_role VARCHAR ( 255 ) NOT NULL,
	created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP 
);
