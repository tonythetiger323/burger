DROP burgers_db IF EXISTS;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_IN\quitCREMENT PRIMARY KEY,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false
)