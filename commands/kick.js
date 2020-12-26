module.exports = {
    name: 'kick',
    description: "Tenhle příkaz kicks vyhodí uživatele!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("Uživatel byl vyhozen!");
        }else{
            message.channel.send(`Nemůžeš ho vyhodit!`);
        }
    }
}