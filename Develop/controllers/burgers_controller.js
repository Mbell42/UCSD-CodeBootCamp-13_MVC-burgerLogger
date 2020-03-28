// DEPENDENCIES
// Express
const express = require("express");

// burger.js
const burger = require("burger");


// Create the router for the app
const router = express.Router();

// CREATE ROUTES
// Return/show all burgers in the database 
// Define route as '/'
router.get('/', (req, res) => {
    burger.selectAll(function(data) {
        // Create handlebars object
        let hbsObject = {
            burgers: data
        };
        // Log handlebars object to console and render it to browser
        console.log(hbsObject);
        res.render('index', hbsObject)     
    });
});

// Create and add a new burger to the database
// Define route as '/'
router.get('/', (req, res) => {

    
})

// Update an existing burger in the database


// Delete a burger from the database



// Export the router at the end of your file.
module.exports = router;