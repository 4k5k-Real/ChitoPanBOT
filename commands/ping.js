module.exports = {
    name: 'ping',
    description: 'Ping del bot y la api, tiempo online',
    execute(msg, args) {
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
        msg.channel.send({
            embed: {
                color: 042231,
                author: {
                    icon_url: client.user.avatarURL
                },
                title: "⚾__pong!__",
                url: "",
                description: "",
                fields: [{
                    name: "Ping bot",
                    value: `🏓**Ping Bot:** ${Date.now() - msg.createdTimestamp}ms`
                },
                {
                    name: "API discord",
                    value: `🌐**Ping API:** ${Math.round(client.ws.ping)}ms`,
                },
                {
                    name: "Bot online",
                    value: `⏱**Tiempo online:** ${days} día/s , ${hours} hora/s, ${minutes} minuto/s y ${seconds} segúndo/s`,
                }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: "https://cdn.discordapp.com/attachments/795478872597594164/828373150382161970/a.jpg",
                    text: "ChitoPanBOT#4390"
                }
            }
        });
    }
};
