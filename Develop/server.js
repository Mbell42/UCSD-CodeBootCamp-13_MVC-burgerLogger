// DEPENDENCIES
    // Express is for building the Rest apis
const express = require("express");
    // body-parser helps to parse the request and create the req.body object
const bodyParser = require("body-parser");
    // cors provides Express middleware to enable CORS with various options.
const cors = require("cors");

// SET UP EXPRESS
const app = express();
// Setting up corsOptions.origin
var corsOptions = {
    origin: "http://localhost:4242"
};
// Set express to use corsOptions
app.use(cors(corsOptions));

// Drop and re-create db if existing
const db = require("./models");
db.sequelize.sync(
    { force: true }).then(() => {
        console.log("Dropping and re-syncing db.");
    }
);

// PARSE 
    // requests of content-type - application/json
app.use(bodyParser.json());
    // requests of content-type - application/x-ww-form-urlencoded
app.use(bodyParser.urlencoded({ extended:true }));

// SETUP HANDLEBARS
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// INCLUDE ROUTES

// SET UP PORT, LISTEN FOR REQUESTS
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});