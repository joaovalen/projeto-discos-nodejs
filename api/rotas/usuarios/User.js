const UserTable = require('./UserTable')
const TabelaUsuario = require('./UserTable')

class User {
    constructor ({ nome, cpf, telefone, email, endereco}) {
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.telefone = telefone
        this.endereco = endereco
    }

    create () {
        const result = UserTable.insertUser({
            nome: this.nome,
            cpf: this.cpf,
            email: this.email,
            telefone: this.telefone,
            endereco: this.endereco
        })
    }

    async loadUser () {
        const userFound = await UserTable.idSearch(this.id)
        this.nome = userFound.nome
        this.cpf = userFound.cpf
        this.telefone = userFound.telefone
        this.endereco = userFound.endereco
        this.email = userFound.email
    }

    async update () {
        await UserTable.idSearch(this.id)
        const fields = ['nome','telefone','cpf','endereco','email']
        const updateData = {}

        fields.forEach((field) => {
            const value = this[field]
            if (typeof value === 'string' && valor.length > 0){
                updateData[field] = value
            }
        })

        //if (Object.keys(dadosParaAtualizar).length === 0){
        //    throw new ('Dados não fornecidos')
       // }

        await UserTable.update(this.id, updateData)
    }

}

module.exports = User