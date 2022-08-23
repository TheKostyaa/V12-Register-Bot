
const { MessageEmbed } = require("discord.js");
module.exports.run = async(client, message, args, embed) => {
  

  let botcommands = "975119043159806122"
  if(!message.member.roles.cache.get(botcommands) && !message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(new MessageEmbed().setDescription(`Bu komutu kullanabilmen için <@&${botcommands}> rolüne sahip olman gerekiyor.`).setColor("BLUE")).then(x => x.delete({ timeout: 6500 }));
  
  let tag = "Wia";
  let tag3 = "x";
  let tag4 = "1965";
  let tag6 = "Wiâ";
  let tag5 = "wiâ";
  let tag7 = "wia";
  const etiket =  message.guild.members.cache.filter(s => !s.bot).filter(member => member.user.discriminator == "1965").size;
  const tag2 = message.guild.members.cache.filter(m => m.user.username.includes(tag) || m.user.username.includes(tag3) || m.user.username.includes(tag4) || m.user.username.includes(tag5) || m.user.username.includes(tag6) || m.user.username.includes(tag7)).size 
  const toptag = message.guild.members.cache.filter(s => !s.bot).filter(member => member.user.username.includes(tag) || member.user.discriminator == "1965" || member.user.username.includes(tag3) || member.user.username.includes(tag4) || member.user.username.includes(tag5) || member.user.username.includes(tag6) || member.user.username.includes(tag7)).size;
  const swtop = message.guild.memberCount
  const ses = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b) 

  const sayy = new MessageEmbed()
  .setTimestamp()
  .setColor('BLACK')
  .setFooter('Developed by Kostya')
  message.react('975800535519232030') // Onay veya tag emoji ID
  message.channel.send(sayy.setDescription(`\`•\` Toplam \`${swtop}\` üye bulunmakta. 
  \`•\` Tagımızda toplam \`${tag2}\` üye bulunmakta.
  \`•\` Etiketimizde toplam \`${etiket}\` üye bulunmakta.
  \`•\` Etiketimizde ve tagımızda toplam \`${toptag}\` üye bulunmakta.
  \`•\` Ses kanallarında \`${ses}\` üye bulunmakta.`));
};

exports.config = {
    name: "say",
    guildOnly: true,
    aliases: [],
    cooldown: 3000
};
