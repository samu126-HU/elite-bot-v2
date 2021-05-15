const mongoose = require('mongoose')
const { default: mongo } = require('wokcommands/dist/mongo')

const reqString = {
    type: String,
    required: true
}

const storesSchema = new mongoose.Schema({
    shopName: reqString
})

const name = 'storefronts-db'
module.exports = mongoose.model[name] || mongoose.model(name, storesSchema, name)
