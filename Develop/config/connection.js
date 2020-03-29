// CONFIGURING MySQL database & Sequelize
// module.exports = {
//     // First five parameters are for MySQL connection
//     HOST: "localhost",
//     USER: "root",
//     PASSWORD: "rootroot",
//     DB: "burgers_db",
//     dialect: "mysql",
//     // pool is optional, it will be used for Sequelize connection pool configuration:
//     pool: {
//         // max: maximum number of connection in pool
//         max: 5,
//         // min: minimum number of connection in pool
//         min: 0,
//         // acquire: maximum time, in milliseconds, that pool will try to get connection before throwing error
//         acquire: 30000,
//         // idle: maximum time, in milliseconds, that a connection can be idle before being released
//         idle: 10000
//     }
// };
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "rootroot",
    database: "burgers_db",
    // pool is optional, it will be used for Sequelize connection pool configuration:
    pool: {
        // max: maximum number of connection in pool
        max: 5,
        // min: minimum number of connection in pool
        min: 0,
        // acquire: maximum time, in milliseconds, that pool will try to get connection before throwing error
        acquire: 30000,
        // idle: maximum time, in milliseconds, that a connection can be idle before being released
        idle: 10000
    }
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