const router = require('express').Router()
const UserTable = require('./UserTable')
const User = require('./User')
const UserSerializer = require('../../Serializer').UserSerializer

// OPTIONS 
router.options('/', (req,res) => {
    res.set('Access-Control-Allow-Methods', 'GET', 'POST')
    res.set('Access-Control-Allow-Headers', 'Content-Type')
    res.status(204)
    res.end()
})

// GET 
router.get('/', async (req, res) => {
    const result = await UserTable.listUsers()
    res.status(200)
    res.send(JSON.stringify(result))
}) 

// POST 
router.post('/', async (req, res, next) => {
    try {
        const reqData = req.body
        const user = new User(reqData)
        await user.create()
        res.status(201)
        res.send(user)
    } catch (error) {
        next(error)
    }
})

// OPTIONS /
router.options('/:userId', (req, res) => {
    res.set('Access-Control-Allow-Methods', 'GET', 'PUT', 'DELETE')
    res.set('Access-Control-Allow-Headers', 'Content-Type')
    res.status(204)
    res.end()
})

// GET ID
router.get('/:userId', async (req, res, next) => {
    try {
        const id = req.params.userId
        const user = new User({ id: id}) 
        await user.loadUser()
        res.status(200)
        res.send(JSON.stringify(user))
    } catch (error) {
        next(error)
    }
})

// PUT 
router.put('/:userId', async (req, res, next) => {
    try {
        const id = req.params.userId
        const bodyData = req.body
        const fullData = Object.assign({}, bodyData, {id: id})
        // Getting the ID and Body data together 
        const user = new User(fullData)
        await user.update()
        res.status(204)
        res.end()
    } catch (error) {
        next(error)
    }
})

// DELETE
router.delete('/:UserId', async (req, res, next) => {
    try {
        const id = req.params.UserId
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