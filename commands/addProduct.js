const productsSchema = require('../models/productsSchema')
const storesSchema = require('../models/storesSchema')
const DJS = require('discord.js')

module.exports = {
    permissions: ['ADMINISTRATOR'],
    description: 'For adding new products.',
    minArgs: 2,
    exceptedArgs: '<shopName> <productURL>',
    callback: async ({message, args, prefix}) => {
        const correctShopNames = await storesSchema.find({ shopName: { $eq: args[0]}})
        const incorrectProductURLs = await productsSchema.find({ productUrl: { $eq: args[1]}})

        if(correctShopNames.length < 1) {
            message.channel.send
            (`Incorrect shop name. Please create your own storefront with:\n ${prefix}makeShop <shopName>`)
        } else if (incorrectProductURLs.length > 0) {
            message.channel.send
            (`This product is already assigned to a shop.`)

        }  else {
            await new productsSchema({
                productUrl: args[1],
                productOwner: args[0]
            }).save()
            message.channel.send
            ("Data successfully saved!\n```Product URL:   " + args[1] + "\nProduct owner: " + args[0] + "```")
        }       
    }
}




/*
const filter = (m) => m.author.id === message.author.id
const collector = new DJS.MessageCollector(message.channel, filter, {max: 1, time: 1000*10})

message.channel.send
(`Something went reeeeealy bad. Your shop exists more than once in the database.\nDo you want to delete all instances of your shop from the database? (y/n)`)
                                     
collector.on('collect', (m) => {

    if (m.content === "y") {
        m.channel.send('k')

    } else if (m.content === "n") {
        m.channel.send('Congrats.')

    } else {
        m.channel.send("That's not an answer..")
    }
})         
collector.on('end', (m) => {
    m.channel.send('Time expired.')
})                                       
*/                                                   