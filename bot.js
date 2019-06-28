var Discord = require('discord.js');
var bot = new Discord.Client();
var client = new Discord.Client();

var activities_list = [
    "with the &help command.", 
    "with the developers console",
    "with some code", 
    "with JavaScript"
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.
});


bot.on('message', message => {
if(message.content.toLowerCase() === '!dsdo')
   message.channel.send('**Kod niedługo dostępny!**');
    
});

bot.login(process.env.B0T_T0KEN);
