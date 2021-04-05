const Discord = require('discord.js');
os = require('os');

module.exports = {
    name: 'stats',
    description: 'Estadisticas repiolas',
    execute(msg, args) {
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
        const embed = new Discord.MessageEmbed();
        embed.setColor('#FF0202').setTitle(`Estadisticas`)
        .addField(`:desktop: Sistema Operativo`, `${os.platform()}`, true)
        .addField(`:gear: Arquitectura`, `${os.arch()}`, true)
        .addField(`:rocket:  CPU`, `${os.cpus().map(i => `${i.model}`)[0]}`, true)
        .addField(`:pager: RAM`, `${Math.trunc((process.memoryUsage().heapUsed) / 1024 / 1000)} MB / ${Math.trunc(os.totalmem() / 1024 / 1000)} MB (${Math.round((Math.round(process.memoryUsage().heapUsed / 1024 / 1024) / Math.round(os.totalmem() / 1024 / 1024)) * 100)}%)`, true)
        .addField(`:dividers: Lib`, `Discord.js ${Discord.version}`, true)
        .addField(`:map: Numero de Servidores`, `${client.guilds.cache.size}`, true)
        .addField(`🏓Ping Bot`, `${Date.now() - msg.createdTimestamp}ms`, true)
        .addField(`🌐Ping API`, `${Math.round(client.ws.ping)}ms`, true)
        .addField(`⏱Tiempo online`, `${days} día/s , ${hours} hora/s, ${minutes} minuto/s y ${seconds} segúndo/s`, true)
        .setTimestamp();
        msg.channel.send(embed);
    }
};
