const Discord = require('discord.js');
const Sequelize = require('sequelize');
const client = new Discord.Client();
const prefix = '양파야 '
client.once('ready', () => {
    console.log('I am ready!')
})
    

client.on('message', message =>{
    if(message.content === `${prefix}핑`) {
        message.channel.send("ping").then((sentMessage) => sentMessage.edit("pong!"))
    }
})
client.on('message', message =>{
    if(message.content === `${prefix}초대`) {
        message.reply('https://discord.com/api/oauth2/authorize?client_id=758100455849984030&permissions=8&scope=bot')
    }
})
client.on('message', message =>{
    
    if(message.content === `${prefix}주사위`) {
        let randdie = Math.round(Math.random()) * 6 + 1
        const Embed = new Discord.MessageEmbed()
        .setTitle('**주사위 :game_die:**')
        .setDescription(`**${randdie}**`)
        .setTimestamp()
	
	
	
message.channel.send(Embed);
    }
})

client.login('NzU4MTAwNDU1ODQ5OTg0MDMw.X2qCEQ.9OlkIdguEZIFkPtyrqAlMuzmUso');