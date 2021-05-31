const modelo = require('../rotas/usuarios/ModeloTabelaUsuario')

async function criarTabelas () {
        await modelo.sync()
}

criarTabelas()