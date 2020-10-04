const Discord = require('discord.js');
const Sequelize = require('sequelize');
const client = new Discord.Client();
const prefix = '양파야 '
const arts = {
    'umjunsik' : `⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠐⢄⡀⠄⠄⣀⡸⠁⠄⠄⠰⠂⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠉⠉⠁⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢠⣾⣿⣿⣿⣿⣿⣿⣷⣶⣤⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⣀⣤⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⣀⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠘⠛⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠽⠿⠛⠋⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⢾⡿⠃⠄⠈⠁⠄⠈⠉⠩⠉⠉⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠐⠒⠒⠂⠄⠄⠄⠄⠄⠄⠄⠉⠄⠄⠄⠄⠄⠄⠸⠡⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⢀⡀⣀⣀⣀⣀⣀⣠⣴⡇⢰⣦⡆⠄⠄⠄⠄⠄⠄⠄⣀⣀⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣸⣿⣿⣧⣄⠄⠄⠄⠈⠿⠭⠉⢁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢹⣾⠏⠙⠿⣿⣦⣤⡀⠠⡄⢠⣾⣿⣶⣤⣄⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⣿⣿⣿⣿⣿⣿⣿⣿⡀⠄⠄⠄⠄⠄⠄⠄⠉⠉⠉⠄⠄⣾⣿⣿⣿⣿⣿⣿⣿⣦⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⣀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠄⠄⠄⠄⠄⠄⠄
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⠄⠄⠄⠄⠄⣠⣾⣿⣿⣿⣟⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠄⠄⠄⠄⢀⣀
    ⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣾⣿⣿⣿⣿⣿⠿⠿⠷⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⡿⠻⢿`,
    'thinking' : `⠰⡿⠿⠛⠛⠻⠿⣷
    ⠀⠀⠀⠀⠀⠀⣀⣄⡀⠀⠀⠀⠀⢀⣀⣀⣤⣄⣀⡀
    ⠀⠀⠀⠀⠀⢸⣿⣿⣷⠀⠀⠀⠀⠛⠛⣿⣿⣿⡛⠿⠷
    ⠀⠀⠀⠀⠀⠘⠿⠿⠋⠀⠀⠀⠀⠀⠀⣿⣿⣿⠇
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠁
    
    ⠀⠀⠀⠀⣿⣷⣄⠀⢶⣶⣷⣶⣶⣤⣀
    ⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀   ⠙⠻⠗
    ⠀⠀⠀⣰⣿⣿⣿⠀⠀⠀⠀⢀⣀⣠⣤⣴⣶⡄
    ⠀⣠⣾⣿⣿⣿⣥⣶⣶⣿⣿⣿⣿⣿⠿⠿⠛⠃
    ⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄
    ⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡁
    ⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁
    ⠀⠀⠛⢿⣿⣿⣿⣿⣿⣿⡿⠟
    ⠀⠀⠀⠀⠀⠉⠉⠉`,
    
 }

client.once('ready', () => {
    console.log('I am ready!')
})
    

client.on('message', message =>{
    if(message.content === `${prefix}핑`) {
        message.channel.send("ping...").then((sentMessage) => sentMessage.edit(`Pong! Ponged back the ping in ${Math.round(client.ws.ping)} milliseconds!`))
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
client.on('message', message => {
    if (message.content.startsWith(`양파야 삭제`)) {
          if(!(message.member.hasPermission("ADMINISTRATOR"))){
     return message.reply('관리자 권한이 없습니다.').then(m => m.delete(5000));
} 
        const args = message.content.split(" ");
        if(message.member.hasPermission("ADMINISTRATOR")) {
        if (args[2] === '랜덤') {
            let a = Math.round(Math.random()) * 10 + 1
            message.channel.bulkDelete(a + 1, true)
            message.reply(`(랜덤) ${a}개의 메시지가 삭제되었습니다.`)
        } else {


            if (args[2] === isNaN) {
                message.reply('삭제할 메시지의 양을 적어주세요')
            } else {
                args[2] *= 1;
                if (args[2] > 99 || args[2] < 1) {
                    message.reply('메시지는 1이상이거나 99이하여야 합니다.')
                } else {
                    message.channel.bulkDelete(args[2] + 1, true)
                    message.reply(`${args[2]}개의 메시지를 삭제하였습니다.`)
                }

            }

        }
    
  }
}
});
client.on('message', message =>{

    if(message.content === `${prefix}픽셀아트 흠터레스팅`) {
        const Embed = new Discord.MessageEmbed()
        
        .setDescription(`${arts.thinking}`)
        .setTimestamp()
        message.channel.send(Embed)
    
    }
    else if(message.content === `${prefix}픽셀아트 엄준식`) {
        const Embed = new Discord.MessageEmbed()
        
        .setDescription(`${arts.umjunsik}`)
        .setTimestamp()
        message.channel.send(Embed)
    }
})
client.login('token')
