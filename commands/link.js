module.exports= {
    name: 'link',
    description: "Tenhle příkaz odešle odkaz na náš Discord!",
    execute(message, args){
        message.channel.send('https://discord.gg/JwWFe3EUgb');
    }
}