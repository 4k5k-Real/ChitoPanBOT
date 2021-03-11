const Discord = require('discord.js');

module.exports = {
    name: 'invite',
    description: 'Link de invitación del bot',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#5965FF').setTitle('FranBOT Invite:')
	    .setURL('https://franbotinvite.cobel-motion.xyz/')
	    .setDescription('https://franbotinvite.cobel-motion.xyz/').setTimestamp();
        msg.channel.send(embed);
    }
};
