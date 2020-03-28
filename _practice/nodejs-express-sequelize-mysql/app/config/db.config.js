// CONFIGURING MySQL database & Sequelize
module.exports = {
    // First five parameters are for MySQL connection
    HOST: "localhost",
    USER: "root",
    PASSWORD: "rootroot",
    DB: "practicedb_001",
    dialect: "mysql",
    // pool is optional, it will be used for Sequelize connection pool configuration:
    pool: {
        // max: maximum number of connection in pool
        max: 2,
        // min: minimum number of connection in pool
        min: 0,
        // acquire: maximum time, in milliseconds, that pool will try to get connection before throwing error
        acquire: 30000,
        // idle: maximum time, in milliseconds, that a connection can be idle before being released
        idle: 10000
    }
};