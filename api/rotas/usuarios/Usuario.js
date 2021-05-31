const TabelaUsuario = require('./TabelaUsuario')

class Usuario {
    constructor ({ nome, cpf, telefone, email, endereco}) {
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.telefone = telefone
        this.endereco = endereco
    }

    create () {
        const result = TabelaUsuario.inserir({
            nome: this.nome,
            cpf: this.cpf,
            email: this.email,
            telefone: this.telefone,
            endereco: this.endereco
        })
    }
}

module.exports = Usuario