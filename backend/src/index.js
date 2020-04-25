const express = require('express')
const mongoose = require ('mongoose')
const cors = require ('cors')
const routes = require('./routes')
const app = express()
mongoose.connect('mongodb+srv://racoon:6Zn7U2g69wYDY5B@cluster0-hzuvp.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
/*
    racoon 6Zn7U2g69wYDY5B
    Query Params: (Quase sempre no GET) request.query (Filtros, ordenação, paginação)
    Route Params: (Identificar um recurso na alteração ou remoção) request.params
    Body: (Dados para criação ou alteração de um registro) request.body
*/

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)