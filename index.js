"use strict";

const sequelize = require("./Modelling/DatabaseConnection");
async function connectDB () {

    sequelize.query('show tables')
    .then((rows)=> {
        console.log(JSON.stringify(rows));
        });
    
    return {
        statusCode : 200,
        body : JSON.stringify({
            message : "got the database connection"
        }, null, 2)
    }
}

module.exports.handler = connectDB;
