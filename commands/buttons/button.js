const discord = require('discord.js');
const config = require('../../config.json');
const timezone = require("moment-timezone");
const moment = require("moment");
require("moment-duration-format");
const ms = require("ms");
const os = require("node:os");
const packageJson = require("../../package.json");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');



module.exports = {
    name: 'button',
    aliases: [],
    description: 'Get bot\'s real time ping status',
    category: 'Misc',
    cooldown: 5,
    run: async (client, message, args) => {

        const button01 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('primary')
                    .setLabel('Primary')
                    .setStyle(ButtonStyle.Primary)
                    // .setAction(() => {
                    //     message.channel.send('Primary button clicked');
                    // })
            );

        const button02 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('secondary')
                    .setLabel('Secondary')
                    .setStyle(ButtonStyle.Secondary)
                    .setEmoji('😄')
            );
        
        

        await message.channel.send({ content: 'Pong!', components: [button01, button02] });

        // client.on('interactionCreate', async interaction => {

        //     // console.log(interaction);
        //     if (interaction.customId === 'primary') {
        //         let counter = 0;
        //         // Increment the counter
        //         counter++;
        //         // Send a message to the channel
        //         await message.channel.send(`${counter} clicks!`);

        //         // Delete the interaction
        //         interaction.delete();
        //     }

        // }
        // );
    }
}




