// DEPENDENCIES
// Express
const express = require("express");

// burger.js
const burger = require("../models/burger.js");


// Create the router for the app
const router = express.Router();

// CREATE ROUTES
// SHOW ALL burgers in the database 
// Define route as '/'
router.get('/', (req, res) => {
    burger.selectAll(function(data) {
        // Create handlebars object
        let object = {
            burgers: data
        };
        // Log handlebars object to console and render it to browser
        console.log(object);
        res.render('index', object);     
    });
});

// CREATE and add a new burger to the database
// Define route as '/'
router.post('/', (req, res) => {
    burger.newBurger(
        // Set new Burger parameters
        ['burger_name', 'devoured'],
        [req.body.burger_name, req.body.devoured],
        function(result) {
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
                // Otherwise, send back successful update
                console.log("Burger status updated in database!"); 
                res.status(200).end();
            }
        }
    );
});

// DELETE a burger from the database
router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition: ", condition);

  burger.deleteBurger(condition, function(result) {
    if (result.affecteddRows == 0) {
      // If no rows changed, send 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Export the router at the end of your file.
module.exports = router;