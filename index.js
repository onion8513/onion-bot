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
    'pepe' : `⠄⠄⠄⠄⠄⠄⢀⣠⣤⣶⣶⣶⣤⣄⠄⠄⢀⣠⣤⣤⣤⣤⣀⠄⠄⠄⠄⠄⠄⠄ ⠄⠄⠄⠄
                    ⢠⣾⣿⣿⣿⣿⠿⠿⢿⣿⣿⡆⣿⣿⣿⣿⣿⣿⣿⣷⡄⠄⠄⠄⠄⠄ ⠄⠄⠄
                    ⣴⣿⣿⡟⣩⣵⣶⣾⣿⣷⣶⣮⣅⢛⣫⣭⣭⣭⣭⣭⣭⣛⣂⠄⠄⠄⠄ ⠄⠄
                    ⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣭⠛⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠄ 
                ⣠⡄⣿⣿⣿⣿⣿⣿⣿⠿⢟⣛⣫⣭⠉⠍⠉⣛⠿⡘⣿⠿⢟⣛⡛⠉⠙⠻⢿⡄ 
                ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣶⣶⣶⣶⣶⣭⣍⠄⣡⣬⣭⣭⣅⣈⣀⣉⣁⠄ 
                ⣿⣿⣿⣿⣿⣿⣿⣿⣶⣭⣛⡻⠿⠿⢿⣿⡿⢛⣥⣾⣿⣿⣿⣿⣿⣿⣿⠿⠋⠄ 
                ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⣩⣵⣾⣿⣿⣯⣙⠟⣋⣉⣩⣍⡁⠄⠄⠄ 
                ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣷⡄⠄⠄ 
                ⣿⣿⣿⣿⣿⣿⡿⢟⣛⣛⣛⣛⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⡀⠄ 
                ⣿⣿⣿⣿⣿⡟⢼⣿⣯⣭⣛⣛⣛⡻⠷⠶⢶⣬⣭⣭⣭⡭⠭⢉⡄⠶⠾⠟⠁⠄ 
                ⣿⣿⣿⣿⣟⠻⣦⣤⣭⣭⣭⣭⣛⣛⡻⠿⠷⠶⢶⣶⠞⣼⡟⡸⣸⡸⠿⠄⠄⠄ 
                ⣛⠿⢿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠷⡆⣾⠟⡴⣱⢏⡜⠆⠄⠄⠄ 
                ⣭⣙⡒⠦⠭⣭⣛⣛⣛⡻⠿⠿⠟⣛⣛⣛⣛⡋⣶⡜⣟⣸⣠⡿⣸⠇⣧⡀⠄⠄ 
                ⣿⣿⣿⣿⣷⣶⣦⣭⣭⣭⣭⣭⣭⣥⣶⣶⣶⡆⣿⣾⣿⣿⣿⣷⣿⣸⠉⣷⠄⠄`,
    
 }

client.once('ready', () => {
    console.log('I am ready!')
})
    

client.on('message', message =>{
    if(message.content === `${prefix}핑`) {
        message.channel.send("ping...").then((sentMessage) => sentMessage.edit(`Pong! Ponged back the ping in ${Math.round(client.ws.ping)} milliseconds!`))
        console.log(`${message.author.tag} 가 (핑) 명령을 사용했어!`)
    }
})
client.on('message', message =>{
    if(message.content === `${prefix}초대`) {
        message.reply('https://discord.com/api/oauth2/authorize?client_id=758100455849984030&permissions=8&scope=bot')
        console.log(`${message.author.tag} 가 (초대) 명령을 사용했어!`)
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
console.log(`${message.author.tag} 가 (주사위) 명령을 사용했어!`)
    }
})
client.on('message', message => {
    if (message.content.startsWith(`${prefix}삭제`)) {
          if(!(message.member.hasPermission("ADMINISTRATOR"))){
     return message.reply('관리자 권한이 없습니다.').then(m => m.delete(5000));
     console.log(`${message.author.tag} 가 (삭제) 명령을 사용하려다 (관리자 권한부족)으로 실패했어!`)
} 

        const args = message.content.split(" ");

            if (isNaN(args[2])) {
                message.reply('삭제할 메시지의 양을 적어주세요')
                console.log(`${message.author.tag} 가 (삭제) 명령을 사용하려다 (올바르지 않은 삭제할 양)으로 실패했어!`)
            } else {
                args[2] *= 1;
                if (args[2] > 99 || args[2] < 1) {
                    message.reply('메시지는 1이상이거나 99이하여야 합니다.')
                    console.log(`${message.author.tag} 가 (삭제) 명령을 사용하려다 (올바르지 않은 삭제할 양)으로 실패했어!`)
                } else {
                    message.channel.bulkDelete(args[2] + 1, true)
                    message.reply(`${args[2]}개의 메시지를 삭제하였습니다.`)
                    console.log(`${message.author.tag} 가 (삭제) 명령을 사용했어!`)
                }

            }

        }
       
  }

);
client.on('message', message =>{

    if(message.content === `${prefix}아스키아트 흠터레스팅`) {
        const Embed = new Discord.MessageEmbed()
        
        .setDescription(`${arts.thinking}`)
        .setTimestamp()
        message.channel.send(Embed)
        console.log(`${message.author.tag} 가 (아스키아트 흠터레스팅) 명령을 사용했어!`)
    
    }
    else if(message.content === `${prefix}아스키아트 엄준식`) {
        const Embed = new Discord.MessageEmbed()
        
        .setDescription(`${arts.umjunsik}`)
        .setTimestamp()
        message.channel.send(Embed)
        console.log(`${message.author.tag} 가 (아스키아트 엄준식) 명령을 사용했어!`)
    }
    else if(message.content === `${prefix}아스키아트 페페`) {
        const Embed = new Discord.MessageEmbed()
        .setDescription(`${arts.pepe}`)
        .setTimestamp()
        message.channel.send(Embed)
        console.log(`${message.author.tag} 가 (아스키아트 페페) 명령을 사용했어!`)
    }
})
client.on('message', message =>{
    message.member = '<@758100455849984030>'
    if(message.content === 'test') {
       if(message.member.hasPermission("ADMINISTRATOR")) {
            message.reply('관리자 권한잇음.')
       }
       else {
           message.reply('관리자 권한없음.');
       }
    }
    
})
client.on('message', message => {
    if(message.content === `${prefix}도움`) {
        message.reply('현재 개발중입니다..')
    }
})
client.on('message', message => {
    if(message.content === `${prefix}가위바위보`){
        const Embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
    .setDescription('이모지 하나를 선택해주세요.')
	.setTimestamp()
	

message.channel.send(Embed).then(() => message.react('✂').then(() => message.react('✊').then(() => message.react('✋'))));
    
       let bots = Math.floor(Math.random() * 3)
        console.log(bots)

const filter = (reaction, user) => {
	return ['✂', '✊', '✋'].includes(reaction.emoji.name) && user.id === message.author.id;
};

message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '✂') {
            a = 0
            
        } 
        else if(reaction.emoji.name === '✊') {
            a = 1
            
        }
        else if(reaction.emoji.name === '✋') {
            a = 2 
             
            
        }
        console.log(a)
        let embed = new Discord.MessageEmbed()
        if(a === bots) {

           if(a == 0) {
               embed
               .addFields(
                   {name: '결과는?', value: '나 : ✂  vs   ✂ : 봇'},
                   {name: 'ㅤ', value: '비겼네요.'}
               )
               .setFooter(`${message.author.username}님과의 놀이`)
               .setTimestamp()
               message.channel.send(embed)

               
           }
           else if(a == 1) {
            embed
            .addFields(
                {name: '결과는?', value: '나 : ✊  vs   ✊ : 봇'},
                {name: 'ㅤ', value: '비겼네요.'}
            )
            .setFooter(`${message.author.username}님과의 놀이`)
            .setTimestamp()
            message.channel.send(embed)
           }
           else if(a == 2) {
            embed
            .addFields(
                {name: '결과는?', value: '나 : ✋  vs   ✋ : 봇'},
                {name: 'ㅤ', value: '비겼네요.'}
            )
            .setFooter(`${message.author.username}님과의 놀이`)
            .setTimestamp()
            message.channel.send(embed)
           }
        }
        else if(a === 0 && bots === 1) {
            embed
            .addFields(
                {name: '결과는?', value: '나 : ✂  vs   ✊ : 봇'},
                {name: 'ㅤ', value: '제가 이겼네요.'}
            )
            .setFooter(`${message.author.username}님과의 놀이`)
            .setTimestamp()
            message.channel.send(embed)
        }
        else if(a === 1 && bots === 2) {
            embed
               .addFields(
                   {name: '결과는?', value: '나 : ✊  vs   ✋ : 봇'},
                   {name: 'ㅤ', value: '제가 이겼네요.'}
               )
               .setFooter(`${message.author.username}님과의 놀이`)
               .setTimestamp()
               message.channel.send(embed)
        }
        else if(a === 2 && bots === 0) {
            embed
               .addFields(
                   {name: '결과는?', value: '나 : ✋  vs   ✂ : 봇'},
                   {name: 'ㅤ', value: '제가 이겼네요.'}
               )
               .setFooter(`${message.author.username}님과의 놀이`)
               .setTimestamp()
               message.channel.send(embed)
        }
        else if(a === 0 && bots === 2 ) {
            embed
            .addFields(
                {name: '결과는?', value: '나 : ✂  vs   ✋ : 봇'},
                {name: 'ㅤ', value: '제가 졌네요.'}
            )
            .setFooter(`${message.author.username}님과의 놀이`)
            .setTimestamp()
            message.channel.send(embed)
        }
        else if(a === 1 && bots === 0) {
            embed
            .addFields(
                {name: '결과는?', value: '나 : ✊  vs   ✂ : 봇'},
                {name: 'ㅤ', value: '제가 졌네요.'}
            )
            .setFooter(`${message.author.username}님과의 놀이`)
            .setTimestamp()
            message.channel.send(embed)
        }
        else if(a === 2 && bots === 1) {
            embed
               .addFields(
                   {name: '결과는?', value: '나 : ✋  vs   ✊ : 봇'},
                   {name: 'ㅤ', value: '제가 졌네요.'}
               )
               .setFooter(`${message.author.username}님과의 놀이`)
               .setTimestamp()
               message.channel.send(embed)
        }
        
	})
	
    }
    
})


	
client.login('NzU4MTAwNDU1ODQ5OTg0MDMw.X2qCEQ.zuhFuxC8wunhD6AbChBvYxWFJ-0');
