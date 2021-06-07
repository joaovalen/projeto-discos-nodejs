class NotFound extends Error {
    constructor(name) {
        super(`${name} não foi encontrado`)
        this.name = 'NaoEncontrado'
        this.idErro = 2 
    }
}

module.exports = NotFound