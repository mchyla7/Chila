module.exports = {
    name: 'clear',
    description: "Vymaže zprávy!",
    async execute(message, args) {
 
        let role = message.guild.roles.cache.find(r => r.name === "😎A-Team😎") || message.guild.roles.cache.find(r => r.name === "😎A-Team😎") 
|| message.guild.roles.cache.find(r => r.name === "😎A-Team😎") || message.guild.roles.cache.find(r => r.name === "M😎A-Team😎");
        if (message.member.roles.cache.some(r => r.name === "A😎A-Team😎") || message.member.roles.cache.some(r => r.name === "😎A-Team😎") || message.member.roles.cache.some(r => r.name === "😎A-Team😎") || message.member.roles.cache.some(r => r.name === "😎A-Team😎")) {
 
            if (!args[0]) return message.reply("Prosím vlož počet zpráv k smazání!");
 
            if (isNaN(args[0])) return message.reply("Vlož prosím realné číslo!");
 
            if (args[0] > 100) return message.reply("Nemůžeš smazat více než 100 zpráv!");
 
            if (args[0] < 1) return message.reply("Musíš smazat aspoň jednu zprávu!");
 
            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages)
                message.channel.send('Smazáno! :)')
            });
        } else {
            message.channel.send('Nemáš na to permise!');
            message.member.roles.add('781131371979735051').catch(console.error);
        }
    }
}