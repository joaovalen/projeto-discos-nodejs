const Sequelize = require('sequelize')
const instance = require('../../database')

const columns = {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNulls: null
    }, 
    telefone: {
        type: Sequelize.STRING,
        allowNulls: null
    },
    email: {
        type: Sequelize.STRING,
        allowNulls: null
    },
    endereço: {
        type: Sequelize.STRING,
        allowNulls: null
    }
}

const opcoes = {
    freezeTableName: true,
    // congela o nome da tablea
    tableName: 'usuarios',
    timestamps: true,
    // Sequelize fornece colunas de data com o timestamps
    
    // alterando para portugues
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao'
}


module.exports = instance.define('usuarios', columns, opcoes)