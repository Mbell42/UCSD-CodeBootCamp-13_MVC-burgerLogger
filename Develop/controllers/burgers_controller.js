// DEPENDENCIES
// Express
const express = require("express");

// burger.js
const burger = require("burger");


// Create the router for the app
const router = express.Router();

// CREATE ROUTES
// SHOW ALL burgers in the database 
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

// CREATE and add a new burger to the database
// Define route as '/'
router.post('/', (req, res) => {
    burger.newBurger(
        // Set new Burger parameters
        ['burger_name', 'devoured'],
        [req.body.burger_name, req.body.devoured],
        result => {
            // Send back the database id of the newly created Burger
            res.json({ id: result.insertId });
        }
    );
});

// UPDATE an existing burger in the database
router.put('api/burgers/:id', (req, res) => {
    // Set condition to id for identifying Burger in database
    let condition = "id =" + req.params.id;

    // Log the id of the Burger to be updated
    console.log("condition: ", condition);
    
    burger.updateBurger(
        {
            devoured: req.body.devoured
        },
        condition,
        result => {
            // If the Burger is not found...
            if(result == 0) {
                // Send a 404 error
                console.log("Burger not found in database!");
                return res.status(404).end();
            } else {
                // Send back successful update
                console.log("Burger status updated in database!"); 
                res.status(200).end();
            }
        }
    );
});

// DELETE a burger from the database



// Export the router at the end of your file.
module.exports = router;