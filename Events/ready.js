const Discord = require("discord.js");
const ayar = require('../settings.js');
module.exports = async client => {
    console.log('' + client.user.tag + ' Kostya hazır')
    client.user.setPresence({ activity: { type: "LISTENING", name: ayar.bot.botStatus }, status: 'online' })
    let botVoiceChannel = client.channels.cache.get(ayar.channels.botVoice);
    if (botVoiceChannel) botVoiceChannel.join().then(s => console.log('Ses kanalına bağlandım!')).catch(e => { console.log('ses kanalına bağlanamadım!!') });
};
