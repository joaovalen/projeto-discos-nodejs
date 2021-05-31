const Sequelize = require('sequelize')
const config = require('config')

const instance = new Sequelize(
    config.get("mysql.database"),
    config.get("mysql.usuario"),
    config.get("mysql.senha"),
    {
        host: config.get('mysql.host'),
        dialect: "mysql"
    }
)

module.exports = instance