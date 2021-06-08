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
    timestamps: true,
    // Sequelize fornece colunas de data com o timestamps
    
    // alterando para portugues
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
}


module.exports = instance.define('authors', columns, options)