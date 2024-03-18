const mongoose = require('mongoose')

async function main() {

    try {
        await mongoose.connect('mongodb+srv://felipearcanjo:<password>@cluster0.1rtndth.mongodb.net/')
        console.log('ok');
    } catch (error) {
        console.log('Erro: ' + error);

    }
}

module.exports = main 