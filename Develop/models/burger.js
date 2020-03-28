// DEPENDENCIES 
// import orm.js into burger.js
const orm = require("../config/orm.js");

// BURGER OBJECT
// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    newBurger: fuction(cols,vals,cb) {
            orm.newBurger("burgers", cols, vals, function(res) {
                cb(res);
            });
        },
        updateBurger: function(condition, cb) {
            orm.deleteBurger("burgers", condition, function(res) {
                cb(res);
            });
        }
};
// Export at the end of the burger.js file.
module.exports = burger;