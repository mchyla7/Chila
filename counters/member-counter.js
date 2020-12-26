module.exports = async (client) =>{
    const guild = client.guilds.cache.get('725569536220332042');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('766578445937278987');
        channel.setName(`🧒│Uživatelé: ${memberCount.toLocaleString()}`);
        console.log('Aktualizace počtu uživatel');
    }, 120000);
}
 