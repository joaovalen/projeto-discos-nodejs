const modelo = require('../rotas/usuarios/UserTableModel')

async function createTables () {
        await modelo.sync()
}

createTables()