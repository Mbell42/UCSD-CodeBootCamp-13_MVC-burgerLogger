// CONFIGURING MySQL database & Sequelize

const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "qf5dic2wzyjf1x5x.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "c16xamdhkh4cqjzk",
    password: "v4iwdegei1g6oeol",
    database: "j0yplfhb4ou6tmjo",
    dialect: "mysql"
       // pool is optional, it will be used for Sequelize connection pool configuration:
    // pool: {
    //     // max: maximum number of connection in pool
    //     max: 5,
    //     // min: minimum number of connection in pool
    //     min: 0,
    //     // acquire: maximum time, in milliseconds, that pool will try to get connection before throwing error
    //     acquire: 30000,
    //     // idle: maximum time, in milliseconds, that a connection can be idle before being released
    //     idle: 10000
    // }
});

// Connect to the database
connection.connect(function(err) {
    if (err) {
      console.error("Error connecting: " + err.stack);
      return;
    }
    console.log("Connected as id: " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;