const config = require("../config.json");
const discord = require("discord.js");

module.exports = async (client) => {

    client.user.setPresence({
        status: "online",
    });
    function randomstatus() {

        let status = [
            `$${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Members 👥`,
            // `$${client.guilds.cache.size} Server 🌐`,
            // `$${client.guilds.cache.size} Hey! I'm ${client.user.username}!`,
            `24/7 ONLINE...!`,
            `Hey! I'm ${client.user.username}!!`,
        ]

        // lt rstatus = Math.floor(eMath.random() * status.length);

        // Change status every 30 seconds
        setTimeout(() => {
            client.user.setPresence({
                status: "online",
                activity: {
                    name: status[Math.floor(Math.random() * status.length)],
                    type: "WATCHING"
                }
            });
            randomstatus();
        } , 30000);
    };


    // setInterval(randomstatus, 15000);

    client.logger.log(`> 🔍 • Check All Server is ${client.guilds.cache.size} Server 🌐`, "info");
    client.logger.log(`> ✅ • Successfully logged on as ${client.user.username}\n\n======================================`, "success");

};
