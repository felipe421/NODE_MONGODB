const mongoose = require('mongoose')

async function main() {

    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_MONGO_USER}:${process.env.DB_MONGO_PWD}@cluster0.1rtndth.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        console.log('ok');
    } catch (error) {
        console.log('Erro: ' + error);

    }
}

module.exports = main 