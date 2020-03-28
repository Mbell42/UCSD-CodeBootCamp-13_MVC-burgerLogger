// SEQUELIZE CONTROLLER
//DEPENDENCIES
const db = require("../models");

const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// CRUD FUNCTIONS - 7 basic functions
// Create & save new tutorial
exports.create = (req,res) => {

};
// Retrieve all Tutorials from the database.
exports.findAll = (req,res) => {

};
// Find a single Tutorial with an id
exports.findOne = (req,res) => {

};
// Update a Tutorial by the id in the request
exports.update = (req,res) => {

};
// Delete a Tutorial with the specified id in the request
exports.delete = (req,res) => {

};
// Delete all Tutorials from the database.
exports.deleteAll = (req,res) => {

};
// Find all published Tutorials
exports.findAllPublished = (req,res) => {

};

// IMPLEMENT FUNCTIONS
 // CREATE A NEW OBJECT
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
        return;
    }

    // Create a Tutorial
    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    // Save Tutorial in the database
    Tutorial.create(tutorial)
        .then(data => {
            res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: 
                err.message || "An error occurred while creating the Tutorial."
        });
    });
};

// RETRIEVE OBJECTS (WITH CONDITION 'TITLE')
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Tutorial.findAll({ where: condition })
        .then(data => {
            res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: 
                err.message || "An error occurred while retrieving Tutorials."
        });
    });
};

// RETRIEVE A SINGLE OBJECT (BY id)
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tutorial.findByPK(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tutorial by id: " + id
            });
        });
};

// UPDATE AN OBJECT (BY id)
exports.update = (req, res) => {
    const id = req.params.id;

    Tutorial.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if(num == 1) {
                res.send({
                    message: "Tutorial was updated successfully!" 
            });
        } else {
            res.send({
                message: `Unable to update Tutorial with id: ${id}. \nEither Tutorial was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updatint Tutorial with id: " + id
        });
    });
};

// DELETE AN OBJECT (WITH SPECIFIED id)
exports.delete = (req,res) => {
    const id = req.params.id;

    Tutorial.destroy({
        where: { id: id }
    })
        .then(num => {
            if(num == 1) {
                res.send({
                    message: "Tutorial was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Unable to delete Tutorial with id: ${id}. Tutorial may not have been found.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Unable to delete Tutorial with id: " + id
            });
        });  
};

// DELETE ALL OBJECTS
exports.deleteAll = (req, res) => {
    Tutorial.destroy({
        where: {},
        truncate: false 
    })
        .then(nums => {
            res.send({ message: `${nums} Tutorials were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "An error occurred while removing all Tutorials."
            });
        });
};
exports.deleteAll = (req, res) => {
    Tutorial.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Tutorials were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      });
  };

// FIND ALL OBJECTS BY CONDITION (published = true)
exports.findAllPublished = (req, res) => {
    Tutorial.findAll({
        where: {
            published: true
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error occurred while retrieving Tutorials."
            });
        });
};


// REFERENCE
// create a new Tutorial: create(object)
// find a Tutorial by id: findByPk(id)
// get all Tutorials: findAll()
// update a Tutorial by id: update(data, where: { id: id })
// remove a Tutorial: destroy(where: { id: id })
// remove all Tutorials: destroy(where: {})
// find all Tutorials by title: findAll({ where: { title: ... } })


