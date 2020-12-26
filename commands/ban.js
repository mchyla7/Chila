module.exports = {
    name: 'ban',
    description: "Tenhle příkaz dá ban uživateli!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("Uživatel byl zabanován!");
        }else{
            message.channel.send(`Nemůžeš ho zabanovat!`);
        }
    }
}