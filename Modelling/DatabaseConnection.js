const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    "database_3_mysql",
    "admin",
    "BlackstarL1!",
    {
        host: "database-3-mysql.cus0ayawdv5s.us-east-1.rds.amazonaws.com",
        dialect: "mysql",
        port: 3306,
        pool : {
            max: 5,
            min: 0,
            acquire: 30000,
            idle : 10000
        }
    }
);
// const db = {};
// db.Sequelize = Sequelize;
// db.sequelize = sequelize;
module.exports = sequelize;