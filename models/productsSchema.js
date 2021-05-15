const mongoose = require('mongoose')
const { default: mongo } = require('wokcommands/dist/mongo')

const reqString = {
    type: String,
    required: true
}

const productsSchema = new mongoose.Schema({
    productUrl: reqString,
    productOwner: reqString
})

const name = 'product-db'
module.exports = mongoose.model[name] || mongoose.model(name, productsSchema, name)
