module.exports = {
    name: 'leave',
    description: 'Zastav� a bot se odpoj�',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("Mus� b�t v kan�le");
        await voiceChannel.leave();
        await message.channel.send('Tak se mej!! (Chila odesel do jine dimenze):((')
 
    }
}