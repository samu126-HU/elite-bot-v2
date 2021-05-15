const errors = true
const Discord = require('discord.js')
const client = new Discord.Client({partials: ['MESSAGE', 'REACTION']})
const WOKCommands = require('wokcommands')
const shoppyStock = require('./functions/shoppyReq')
require('dotenv').config()
require('./functions/shoppyReq')

client.on('ready', () => {

    const WOK = new WOKCommands(client, {
        commandsDir: 'commands',
        featuresDir: 'features',     
    })
    .setMongoPath(process.env.MONGOURI)
    console.log(`Client:READY`)
})

process.on('uncaughtException', (err) => {
    if (errors = true) {
        console.error(err)
    } else if (errors = false) {
        console.error('\nSomething happened. Turn on errors and check again.\n')
    }     
})

client.on('message', async (message) => {
    if (message.content === 'hi') {
        message.channel.send(await shoppyStock('https://shoppy.gg/product/YVE69Vr'))
    }
})

client.login(process.env.TOKEN)
