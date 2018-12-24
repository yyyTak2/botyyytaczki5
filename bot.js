var Discord = require('discord.js');
var bot = new Discord.Client();
var client = new Discord.Client();

bot.on('ready', () => {
    bot.user.setStatus('dnd')
    bot.user.setPresence({
        game: {
            name: '🍌Huehuehue💰',
            type: 0
        }
    });
});	

bot.on('message', message => {
if(message.content.toLowerCase() === '!nitro')
   message.channel.send('**Kod niedługo dostępny!**');
    
});

bot.login(process.env.B0T_T0KEN);

    
