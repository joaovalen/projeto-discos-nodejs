// Users Route 
const router = require('express').Router()
const UserTable = require('./UserTable')
const User = require('./User')

// GET full route
router.get('/', async (request, response) => {
    const result = await UserTable.listUsers()
    response.status(200)
    response.send(JSON.stringify(result))
    const serializer = new UserSerializer()
}) 

// POST route
router.post('/', async (request, response) => {
    const reqData = request.body
    const user = new User(reqData)
    await user.create()
    response.status(200)
    response.send(reqData)
})

// ID GET route
router.get('/:userId', async (request, response) => {
    const id = request.params.userId
    const user = new User({ id: id}) 
    await user.loadUser()
    res.status(200)
    res.send(JSON.stringify(user))
})

// PUT route
router.put('/userId', async (request, response) => {
    console.log('ENTROU NO PUT')
    const id = request.params.userId
    const bodyData = request.body
    const fullData = Object.assign({}, bodyData, {id: id})
    // Getting the ID and Body data together 
    const user = new User(fullData)
    await user.update()
    res.status(204)
    res.end()
})

module.exports = router