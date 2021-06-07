const Modelo = require('./UserTableModel')
const NotFound = require('../../errors/NotFound')

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

        if (!userFound) {
            throw new NotFound('Usuário')
        }

        return userFound
    },

    update (id, updateData) {
        return Modelo.update(
            updateData,
            {
                where: {id: id}
            }
        )
    },

    remove (id) {
        return Modelo.destroy({
            where: {id: id}
        })
    }
}