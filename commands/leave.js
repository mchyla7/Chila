module.exports = {
    name: 'leave',
    description: 'Zastaví a bot se odpojí',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("Musíš být v kanále");
        await voiceChannel.leave();
        await message.channel.send('Tak se mej!! (Chila odesel do jine dimenze):((')
 
    }
}