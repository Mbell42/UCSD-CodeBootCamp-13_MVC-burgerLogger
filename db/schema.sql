/* SQL Table Schema */

/* For SQLworkbench 8 users */
/* ALTER USER 'root'@'localHost' IDENTIFIED WITH mysql_native_password BY 'root'; */

/* Create database */
USE xxfojd8n7rie4cxo;

/* Create burgers table */
CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL,
    burger_name varchar(60) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);

/* Check burgers table */
SELECT * FROM burgers; 