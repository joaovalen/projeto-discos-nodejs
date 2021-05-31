const Modelo = require('./ModeloTabelaUsuario')

module.exports = {
    inserir (usuario) {
        return Modelo.create(usuario)
    },

    listar () {
        return Modelo.findAll({raw: true})
    }
}