module.exports = {
    name: 'unmute',
    description: "Tenhle příkaz unmutne uživatele!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.id === 'Sledující');
            let muteRole = message.guild.roles.cache.find(role => role.id === 'Muted');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.role.remove(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> byl unmuted`);
        } else{
            message.channel.send('Nemohu nalézt uživatele!');
        }
    }
}