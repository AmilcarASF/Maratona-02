const express = require('express')
const server = express()
const routes = require("./routes")
const path = require('path')

// usar template engine - no frontend, nas views, será utilizado ejs
server.set('view engine', 'ejs')

// mudar a localização da pasta view
server.set('views', path.join(__dirname, 'views'))

//habilitar arquivos statics
//server.use - adiciona funcionalidades no servidor
// express.static("public") - informa ao servidor que a pasta public é statica, para criar as rotas
server.use(express.static("public"))

//usar o req.body
server.use(express.urlencoded({ extends: true }))

// routes - as rotas estão configuradas no arquivo routes.js
server.use(routes)

server.listen(3000, () => console.log('rodando..'))