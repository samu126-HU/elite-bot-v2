const storesSchema = require('../models/storesSchema')

module.exports = {
    permissions: ['ADMINISTRATOR'],
    description: 'For adding new storefronts.',
    minArgs: 1,
    exceptedArgs: '<shopName>',
    callback: async ({message, args}) => {
        const namesUsed = await storesSchema.find({ shopName: { $eq: args[0]}})

        if (namesUsed.length > 0) {
            message.channel.send("The shop's name is unavalible!")
        } else {
            await new storesSchema({
                shopName: args[0]
            }).save()
            message.channel.send("Shop created!")
        }
    }
}