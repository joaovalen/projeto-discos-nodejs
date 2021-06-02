const modelo = require('../rotas/usuarios/UserTableModel')

async function criarTabelas () {
        await modelo.sync()
}

criarTabelas()