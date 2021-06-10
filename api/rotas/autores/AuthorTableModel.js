const Sequelize = require('sequelize')
const instance = require('../../database')

const columns = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genre: {
        type: Sequelize.STRING,
        allowNulls: false
    }, 
    members: {
        type: Sequelize.STRING,
        allowNulls: null
    }
}

const options = {
    freezeTableName: true,
    // congela o nome da tablea
    tableName: 'authors',
    timestamps: false
}

module.exports = instance.define('authors', columns, options)