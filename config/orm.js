// DEPENDENCIES
const connection = require("./connection.js")

// Helper function for SQL syntax
function printQuestionMarks(num) {
    let arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push('?');
    }
    return arr.toString();
  }

// Helper function for converting object key/value pairs to SQL
function objToSql(ob) {
    let arr = [];
  
    // loop through keys and push key/value as string into array
    for (var key in ob) {
      let value = ob[key];
      // check to skip any hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if the string has spaces, add quotes
        if (typeof value === 'string' && value.indexOf(' ') >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + '=' + value);
      }
    }
    // translate the array of strings to one single comma-seperated string
    return arr.toString();
  }

// CRUD FUNCTIONS - 3 basic functions
//selectAll()
const orm = {
    selectAll: (tableInput, cb) => {
        // Retrieve all burgers from the database. 
        let queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    // insertOne()
    newBurger: (table, cols, vals, cb) => {
        // Create & save new burger
        var queryString = 'INSERT INTO ' + table;

        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += printQuestionMarks(vals.length);
        queryString += ') ';
        // Print concatenated queryString to console
        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
        if (err) {
            throw err;
        }

        cb(result);
        });
    },
    // updateOne()
    updateBurger: (table, objColVals, condition, cb) => {
        // Update a single burger with an id to 'devoured' status
        var queryString = 'UPDATE ' + table;
    
        queryString += ' SET ';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;
        console.log(queryString);
        // Print concatenated queryString to console
        connection.query(queryString, (err, result) => {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
};
// Export the ORM object in module.exports
module.exports = orm;

