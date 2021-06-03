const UserTable = require('./UserTable')
const TabelaUsuario = require('./UserTable')

class User {
    constructor ({ name, cpf, phone, email, address}) {
        this.name = name
        this.cpf = cpf
        this.email = email
        this.phone = phone
        this.address = address
    }

    create () {
        const result = UserTable.insertUser({
            name: this.name,
            cpf: this.cpf,
            email: this.email,
            phone: this.phone,
            address: this.address
        })
    }

    async loadUser () {
        const userFound = await UserTable.idSearch(this.id)
        this.name = userFound.name
        this.cpf = userFound.cpf
        this.phone = userFound.phone
        this.address = userFound.address
        this.email = userFound.email
    }

    async update () {
        await UserTable.idSearch(this.id)
        const fields = ['name','phone','cpf','address','email']
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