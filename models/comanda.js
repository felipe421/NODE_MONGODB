

const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    nome: String,
})

const comanda = mongoose.model('comanda', Schema)

module.exports = comanda