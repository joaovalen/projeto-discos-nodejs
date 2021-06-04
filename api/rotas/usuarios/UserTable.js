const Modelo = require('./UserTableModel')

module.exports = {
    insertUser (user) {
        return Modelo.create(user)
    },

    listUsers () {
        return Modelo.findAll({raw: true})
    },

    async idSearch(id) {
        const userFound = await Modelo.findOne({
            where: {
                id: id
            }
        })
    },

    update (id, updateData) {
        return Modelo.updata(
            updateData,
            {
                where: {id: id}
            }
        )
    }
}