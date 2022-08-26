const discord = require('discord.js');
const config = require('../../config.json');
const timezone = require("moment-timezone");
const moment = require("moment");
require("moment-duration-format");
const ms = require("ms");
const os = require("node:os");
const packageJson = require("../../package.json");

module.exports = {

    name: "stats",
    aliases: [],
    description: "Get bot's real time ping status",
    category: "Misc",
    cooldown: 5,
    run: async (client, message, args) => {

       if(message.author.id !== config.ownerID) return message.channel.send("This command is only for owner!");

        try {
            const duration = moment.duration(client.uptime).format("**D [D], H [H], m [M], s [S]**");

            const embed = new discord.EmbedBuilder()
                .setTitle(`⚙ System Statistics`)
                .setDescription(`
\`\`\`asciidoc
• Owner and developer: :: ${client.users.cache.get(config.ownerID)?.tag}
• Platform - Arch     :: ${process.platform} - ${process.arch}
• Bot Uptime          :: ${duration}
• Memory Usage        :: ${formatBytes(process.memoryUsage.rss())}
• Process Uptime      :: ${ms(Math.round(process.uptime() * 1000), { long: true })}
• OS Uptime           :: ${ms(os.uptime() ?? 0, { long: true })}
• Node.js version     :: ${process.version}
• Discord.js version  :: v${discord.version}
• Bot Version         :: v${packageJson.version}
• User Count: :: ${client.users.cache.size}
• Operation Time: <t:${Math.floor(Number(Date.now() - client.uptime) / 1000)}:R>
• Ping: ::${client.ws.ping} MS
• Memory Usage: ::${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB

\`\`\`
            `)
                .setFooter({ text: `Requested by ${message.author.username} | Today at ${timezone.tz("Asia/Jakarta").format("HH:mma") + " "}`, iconURL: message.author.displayAvatarURL({ 
                        dynamic: true 
                    }) 
                })
            message.channel.send({ embeds: [embed] })
        } catch (e) {
            const embed = new discord.EmbedBuilder()
                .setDescription(`${e}`)
                .setColor(config.color)
            message.channel.send({ embeds: [embed] })
        }
    }
};

function formatBytes(bytes) {
    if (bytes === 0) return "0 Bytes";
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`;
};
