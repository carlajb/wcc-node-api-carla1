// configuracao do banco de dando 
// dotenv
// npm install --save detenv

const dotenv = require("dotenv");

dotenv.config();


module.exports = {
    connectionsStringUrl: process.env.DB_CONNECTION_STRING_URL,
    dialect: "postgres"
};