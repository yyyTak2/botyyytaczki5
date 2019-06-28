var Discord = require('discord.js');
var bot = new Discord.Client();
var client = new Discord.Client();

var activevar = ["with the &help command.", "with the developers console", "with some code", "with JavaScript"];
var activities = activevar[Math.floor(Math.random()*activevar.length)];
client.on('ready', () => {
    client.user.setActivity(activities);
}

bot.on('message', message => {
if(message.content.toLowerCase() === '!dsdo')
   message.channel.send('**Kod niedługo dostępny!**');
    
});

bot.login(process.env.B0T_T0KEN);
