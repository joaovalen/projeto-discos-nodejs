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
    timestamps: true,
    // Sequelize fornece colunas de data com o timestamps
    
    // alterando para portugues
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
}


module.exports = instance.define('users', columns, options)