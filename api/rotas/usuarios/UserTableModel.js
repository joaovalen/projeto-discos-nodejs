const Sequelize = require('sequelize')
const instance = require('../../database')

const columns = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNulls: null
    }, 
    phone: {
        type: Sequelize.STRING,
        allowNulls: null
    },
    email: {
        type: Sequelize.STRING,
        allowNulls: null
    },
    address: {
        type: Sequelize.STRING,
        allowNulls: null
    }
}

const options = {
    freezeTableName: true,
    // congela o nome da tablea
    tableName: 'users',
    timestamps: false
}

module.exports = instance.define('users', columns, options)