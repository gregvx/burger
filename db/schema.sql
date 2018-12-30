DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	item_id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (item_id),
	burger_name varchar(255) NOT NULL,
    devoured boolean NOT NULL
);