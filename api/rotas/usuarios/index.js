// Users Route 
const router = require('express').Router()

const TabelaUsuario = require('./TabelaUsuario')
// Importanto classe usuario
const Usuario = require('./Usuario')

// requisição de GET que retorna listagem dos usuarios
router.get('/', async (request, response) => {
        const resultado = await TabelaUsuario.listar()
        response.status(200)
        response.send(JSON.stringify(resultado))
}) 

router.post('/', async (request, response) => {
    const reqData = request.body
    const user = new Usuario(reqData)
    await user.create()
    response.status(200)
    response.send(reqData)
})


module.exports = router