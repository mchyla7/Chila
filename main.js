const Discord = require('discord.js');
const client = new Discord.Client();

const ytdl = require("ytdl-core");

var servers = {};
 
const prefix = '-';
 
const fs = require('fs');

const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 

client.on('ready', () => {
    console.log('Chila je online!');
    memberCounter(client);
    client.user.setActivity("Veselé Vánoce", { type: "LISTENING"})
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Sledující');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('754643860159856692').send(`Vítej <@${guildMember.user.id}> u nás na serveru!`)
});
    
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'link'){
        client.commands.get('link').execute(message, args);
    } else if (command == 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if (command == 'reactionrole'){
        client.commands.get('reactionrole').execute(message, args);
    } else if (command == 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if (command == 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if (command == 'mute'){
        client.commands.get('mute').execute(message, args);
    } else if (command == 'unmute'){
        client.commands.get('unmute').execute(message, args);
    } else if (command == 'play'){
        client.commands.get('play').execute(message, args);
    } else if (command == 'leave'){
        client.commands.get('leave').execute(message, args);
    }
});


client.login('Token');  
