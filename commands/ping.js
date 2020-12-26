module.exports= {
    name: 'ping',
    description: "Tohle je Ping 🏓 Příkaz",
    execute(message, args){
        message.channel.send('Pong! 🏓');
    }
}