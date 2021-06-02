// npm install express body-parser sequelize mysql2 config

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')

app.use(bodyParser.json())

// o require inclui um modulo 
const router = require('./rotas/usuarios')
// localhost:3000/api/fornecedores 
app.use('/api/usuarios', router)

app.listen(config.get('api.connection'), () => console.log('The Api is working'))