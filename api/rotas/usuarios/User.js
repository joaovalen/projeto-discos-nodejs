const UserTable = require('./UserTable')
const InvalidField = require('../../errors/InvalidField')
const DataNotProvided = require('../../errors/DataNotProvided')

class User {
    constructor ({ id, name, cpf, phone, email, address}) {
        this.id = id
        this.name = name
        this.cpf = cpf
        this.email = email
        this.phone = phone
        this.address = address
    }

    async create () {
        this.validate()
        const result = await UserTable.insertUser({
            name: this.name,
            cpf: this.cpf,
            email: this.email,
            phone: this.phone,
            address: this.address
        })
        return result
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
            if (typeof value === 'string' && value.length > 0){
                updateData[field] = value
            }
        })

        if (Object.keys(updateData).length === 0){
            throw new DataNotProvided()
        }

        await UserTable.update(this.id, updateData)
    }

    remove () {
        return UserTable.remove(this.id)
    }

    validate() {
        const fields = ['name','phone','cpf','address','email']

        fields.forEach(field => {
            const value = this[field]

            if (typeof value !== 'string' || value.length === 0){
                throw new InvalidField(field)
            }
        })
    }
    
}

module.exports = User