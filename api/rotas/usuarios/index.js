// Users Route 
const router = require('express').Router()
const UserTable = require('./UserTable')
const User = require('./User')
const UserSerializer = require('../../Serializer').UserSerializer

// GET full route
router.get('/', async (request, response) => {
    const result = await UserTable.listUsers()
    response.status(200)
    response.send(JSON.stringify(result))
}) 

// ID GET route
router.get('/:userId', async (request, response, next) => {
    try {
        const id = request.params.userId
        const user = new User({ id: id}) 
        await user.loadUser()
        response.status(200)
        response.send(JSON.stringify(user))
    } catch (error) {
        next(error)
    }
    
})

// POST route
router.post('/', async (request, response) => {
    const reqData = request.body
    const user = new User(reqData)
    await user.create()
    response.status(201)
    response.send(user)
})

// PUT route
router.put('/userId', async (request, response) => {
    const id = request.params.userId
    const bodyData = request.body
    const fullData = Object.assign({}, bodyData, {id: id})
    // Getting the ID and Body data together 
    const user = new User(fullData)
    await user.update()
    res.status(204)
    res.end()
})

// DELETE
router.delete('/:idUsuario', async (req, res, next) => {
    try {
        const id = req.params.idUsuario
        const user = new User({id: id})
        await user.loadUser()
        await user.remove()
        res.status(204)
        res.end()
    } catch (erro) {
        next(erro)
    }
        
    
})

module.exports = router