/* SQL Table Schema */

/* For SQLworkbench 8 users */
/* ALTER USER 'root'@'localHost' IDENTIFIED WITH mysql_native_password BY 'root'; */

/* Create database */
DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

/* Create burgers table */
CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL,
    burger_name varchar(60) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);

/* Check burgers table */
SELECT * FROM burgers; 