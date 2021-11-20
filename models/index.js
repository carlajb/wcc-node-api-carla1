const databaseConfig = require("../config/db.config");

const Sequelize = require("sequelize");

const sequelizeOptions = { dialect: "postgres"};
const sequelizeDatabase = new Sequelize(databaseConfig.connectionsStringUrl,sequelizeOptions)

const database = {
    Sequelize: Sequelize,
    sequelizeDatabase: sequelizeDatabase,
};

const artigosModel = require("./artigos.model.js")
database.artigos =artigosModel(sequelizeDatabase, Sequelize);


module.exports = database;