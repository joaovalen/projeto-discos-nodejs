// npm install express body-parser sequelize mysql2 config

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')
const acceptedFormats = require('./Serializer').acceptedFormats
const ValueNotSupported = require('./errors/ValueNotSupported')
const NotFound = require('./errors/NotFound')
const ErrorSerializer = require('./Serializer').ErrorSerializer

app.use(bodyParser.json())

// Middleware para checar o formato da requisição
app.use((req, res, next) => {
    let requestedFormat = req.header('Accept')
    if (requestedFormat === '*/*'){
        requestedFormat = 'application/json'
    }
    if (acceptedFormats.indexOf(requestedFormat) === -1) {
        res.status(406)
        res.end()
        return 
    }
    res.setHeader('Content-Type', requestedFormat)
    next()
})

// Users Route
const usersRouter = require('./rotas/usuarios')
app.use('/api/usuarios', usersRouter)

// Authors Route
const authorsRouter = require('./rotas/autores')
app.use('/api/autores', authorsRouter)

app.use((error, req, res, next) => {
    //console.log('veio pro middleware')
    let status = 500

    if (error instanceof ValueNotSupported) {
        status = 404
    }

    if (error instanceof NotFound) {
        status = 404
    }

    const serializer = new ErrorSerializer(
        res.getHeader('Content-Type')
    )

    res.status(status)
    res.send(
        serializer.serialize({
            message: error.message,
            id: error.idError
        })
    )
})

app.listen(config.get('api.connection'), () => console.log('The Api is working'))