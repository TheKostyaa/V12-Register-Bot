const Discord = require("discord.js")
const client = new Discord.Client();
const ayar = require("./settings.js")
const fs = require("fs");
require('./util/Loader.js')(client);

const mongoose = require('mongoose');
mongoose.connect(ayar.bot.mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }).then(m => setTimeout(() => { console.log('Databaseyi sikerek bağlandım!') }, 3000)).catch(err => setTimeout(() => { console.log('Database bağlanamadı!!') }, 3000));
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./Commands/', (err, files) => {
    if (err) console.error(err);
    console.log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./Commands/${f}`);
        console.log(`${props.config.name} komutu yüklendi.`);
        client.commands.set(props.config.name, props);
        props.config.aliases.forEach(alias => {
            client.aliases.set(alias, props.config.name);
        });
    });
})



client.on("message", function(msg) {
    // if message begins with "ping"
    if (msg.content.indexOf(".tag") === 0) {
        // send a message to the channel the ping message was sent in.
        msg.channel.send("`` -  - - ``");

        // alert the console
        console.log("pong-ed " + msg.author.username);
    }
});

client.on("message", function(msg) {
    // if message begins with "ping"
    if (msg.content.indexOf("!tag") === 0) {
        // send a message to the channel the ping message was sent in.
        msg.channel.send("``wiâ - wia - x - #1965``");

        // alert the console
        console.log("pong-ed " + msg.author.username);
    }
});

client.on("guildMemberAdd", member => {
    let sunucuid = "973611167614390302";
    let tag = "Wia";
    let rol = "975119104111423548";
    if (member.user.username.includes(tag)) {
        member.roles.add(rol)
        const tagalma = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription(`<@${member.id}> adlı kişi sunucumuza taglı şekilde katıldı.`)
            .setTimestamp()
        client.channels.cache.get("975119200202948658").send(tagalma)
    }
})

client.on("guildMemberAdd", member => {
    let sunucuid = "";
    let tag = "";
    let rol = "";
    if (member.user.username.includes(tag)) {
        member.roles.add(rol)
        const tagalma = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription(`<@${member.id}> adlı kişi sunucumuza taglı şekilde katıldı.`)
            .setTimestamp()
        client.channels.cache.get(").send(tagalma)
    }
})

client.on("guildMemberAdd", member => {
    let sunucuid = "";
    let tag = "";
    let rol = "";
    if (member.user.username.includes(tag)) {
        member.roles.add(rol)
        const tagalma = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription(`<@${member.id}> adlı kişi sunucumuza taglı şekilde katıldı.`)
            .setTimestamp()
        client.channels.cache.get("").send(tagalma)
    }
})

client.on("guildMemberAdd", member => {
    let sunucuid = "";
    let tag = "";
    let rol = "";
    if (member.user.username.includes(tag)) {
        member.roles.add(rol)
        const tagalma = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription(`<@${member.id}> adlı kişi sunucumuza taglı şekilde katıldı.`)
            .setTimestamp()
        client.channels.cache.get("").send(tagalma)
    }
})

client.on("guildMemberAdd", member => {
    let sunucuid = "";
    let tag = "";
    let rol = "";
    if (member.user.username.includes(tag)) {
        member.roles.add(rol)
        const tagalma = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription(`<@${member.id}> adlı kişi sunucumuza taglı şekilde katıldı.`)
            .setTimestamp()
        client.channels.cache.get("").send(tagalma)
    }
})

client.on("guildMemberAdd", member => {
    let sunucuid = "";
    let tag = "";
    let rol = "";
    if (member.user.username.includes(tag)) {
        member.roles.add(rol)
        const tagalma = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription(`<@${member.id}> adlı kişi sunucumuza taglı şekilde katıldı.`)
            .setTimestamp()
        client.channels.cache.get("").send(tagalma)
    }
})


//////-------etiket girişte-------/////


client.on("guildMemberAdd", member => {
    let sunucuid = "";
    let tag = "";
    let rol = "";
    if (member.user.discriminator.includes(tag)) {
        member.roles.add(rol)
        const tagalma = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription(`<@${member.id}> adlı kişi sunucumuza taglı şekilde katıldı.`)
            .setTimestamp()
        client.channels.cache.get("").send(tagalma)
    }
})


client.on("userUpdate", async function(oldUser, newUser) { // kod codaredan alınıp editlenmiştir!
    let tag1 = "Wİa";
    let tag2 = "wia";
    let tag3 = "1965";
    let tag4 = "Wiâ";
    let tag5 = "wiâ";
    let tag6 = "x";
    const roleID = "";
    const guildID = "";
    const chat = "";
    const log2 = "";
    const etiket = "";
    const unregister = "";
    const guild = client.guilds.cache.get(guildID)
    const role = guild.roles.cache.find(roleInfo => roleInfo.id === roleID)
    const member = guild.members.cache.get(newUser.id)
    if (newUser.username !== oldUser.username) {
        if (oldUser.username.includes(tag1) && !newUser.username.includes(tag1)) {
            member.roles.set([unregister])
            member.roles.remove(roleID)
            member.setNickname(``)

            client.channels.cache.get(log2).send(`${newUser} Adlı kişi isminden **${tag1}** sildi \n \`Alınan Rol:\` \`Tagges of Wiâ\` \n\n \`Kişi Bilgileri;\` \n \`Kişi İd:\` ${newUser.id} \n \`Kişi İsmi:\` ${newUser.tag} \n \`Kişi Etiketi:\` ${newUser} \n  \n\n \`Kişinin Eski İsimi:\` ${oldUser.tag} \n \`Kişinin Yeni İsimi:\` ${newUser.tag}`)
        } else if (!oldUser.username.includes(tag1) && newUser.username.includes(tag1)) {
            member.roles.add(roleID)
            client.channels.cache.get(chat).send(` ${newUser} \` Tag aldı selam verin.\``).then(x => x.delete({ timeout: 10000 }))
            client.channels.cache.get(log2).send(`${newUser} Adlı kişi ismine **${tag1}** tagını aldı \n \`Verilen Rol:\` \`Tagges of Wiâ\` \n\n \`Kişi Bilgileri;\` \n \`Kişi İd:\` ${newUser.id} \n \`Kişi İsmi:\` ${newUser.tag} \n \`Kişi Etiketi:\` ${newUser} \n  \n\n \`Kişinin Eski İsimi:\` ${oldUser.tag} \n \`Kişinin Yeni İsimi:\` ${newUser.tag}`)
        }
    }
    if (newUser.username !== oldUser.username) {
        if (oldUser.username.includes(tag2) && !newUser.username.includes(tag2)) {
            member.roles.set([unregister])
            member.roles.remove(roleID)
            member.setNickname(``)

            client.channels.cache.get(log2).send(`${newUser} Adlı kişi isminden **${tag2}** sildi \n \`Alınan Rol:\` \`Tagges of Wiâ\` \n\n \`Kişi Bilgileri;\` \n \`Kişi İd:\` ${newUser.id} \n \`Kişi İsmi:\` ${newUser.tag} \n \`Kişi Etiketi:\` ${newUser} \n  \n\n \`Kişinin Eski İsimi:\` ${oldUser.tag} \n \`Kişinin Yeni İsimi:\` ${newUser.tag}`)
        } else if (!oldUser.username.includes(tag2) && newUser.username.includes(tag2)) {
            member.roles.add(roleID)
            client.channels.cache.get(chat).send(` ${newUser} \` Tag aldı selam verin.\``).then(x => x.delete({ timeout: 10000 }))
            client.channels.cache.get(log2).send(`${newUser} Adlı kişi ismine **${tag2}** tagını aldı \n \`Verilen Rol:\` \`Tagges of Wiâ\` \n\n \`Kişi Bilgileri;\` \n \`Kişi İd:\` ${newUser.id} \n \`Kişi İsmi:\` ${newUser.tag} \n \`Kişi Etiketi:\` ${newUser} \n  \n\n \`Kişinin Eski İsimi:\` ${oldUser.tag} \n \`Kişinin Yeni İsimi:\` ${newUser.tag}`)
        }
    }
    if (newUser.username !== oldUser.username) {
        if (oldUser.username.includes(tag3) && !newUser.username.includes(tag3)) {
            member.roles.set([unregister])
            member.roles.remove(roleID)
            member.setNickname(``)

            client.channels.cache.get(log2).send(`${newUser} Adlı kişi isminden **${tag3}** sildi \n \`Alınan Rol:\` \`Tagges of Wiâ\` \n\n \`Kişi Bilgileri;\` \n \`Kişi İd:\` ${newUser.id} \n \`Kişi İsmi:\` ${newUser.tag} \n \`Kişi Etiketi:\` ${newUser} \n  \n\n \`Kişinin Eski İsimi:\` ${oldUser.tag} \n \`Kişinin Yeni İsimi:\` ${newUser.tag}`)
        } else if (!oldUser.username.includes(tag3) && newUser.username.includes(tag3)) {
            member.roles.add(roleID)
            client.channels.cache.get(chat).send(` ${newUser} \` Tag aldı selam verin.\``).then(x => x.delete({ timeout: 10000 }))
            client.channels.cache.get(log2).send(`${newUser} Adlı kişi ismine **${tag3}** tagını aldı \n \`Verilen Rol:\` \`Tagges of Wiâ\` \n\n \`Kişi Bilgileri;\` \n \`Kişi İd:\` ${newUser.id} \n \`Kişi İsmi:\` ${newUser.tag} \n \`Kişi Etiketi:\` ${newUser} \n  \n\n \`Kişinin Eski İsimi:\` ${oldUser.tag} \n \`Kişinin Yeni İsimi:\` ${newUser.tag}`)
        }
    }
    if (newUser.username !== oldUser.username) {
        if (oldUser.username.includes(tag4) && !newUser.username.includes(tag4)) {
            member.roles.set([unregister])
            member.roles.remove(roleID)
            member.setNickname(``)

            client.channels.cache.get(log2).send(`${newUser} Adlı kişi isminden **${tag4}** sildi \n \`Alınan Rol:\` \`Tagges of Wiâ\` \n\n \`Kişi Bilgileri;\` \n \`Kişi İd:\` ${newUser.id} \n \`Kişi İsmi:\` ${newUser.tag} \n \`Kişi Etiketi:\` ${newUser} \n  \n\n \`Kişinin Eski İsimi:\` ${oldUser.tag} \n \`Kişinin Yeni İsimi:\` ${newUser.tag}`)
        } else if (!oldUser.username.includes(tag4) && newUser.username.includes(tag4)) {
            member.roles.add(roleID)
            client.channels.cache.get(chat).send(` ${newUser} \` Tag aldı selam verin.\``).then(x => x.delete({ timeout: 10000 }))
            client.channels.cache.get(log2).send(`${newUser} Adlı kişi ismine **${tag4}** tagını aldı \n \`Verilen Rol:\` \`Tagges of Wiâ\` \n\n \`Kişi Bilgileri;\` \n \`Kişi İd:\` ${newUser.id} \n \`Kişi İsmi:\` ${newUser.tag} \n \`Kişi Etiketi:\` ${newUser} \n  \n\n \`Kişinin Eski İsimi:\` ${oldUser.tag} \n \`Kişinin Yeni İsimi:\` ${newUser.tag}`)
        }
    }
     if (newUser.username !== oldUser.username) {
        if (oldUser.username.includes(tag5) && !newUser.username.includes(tag5)) {
            member.roles.set([unregister])
            member.roles.remove(roleID)
            member.setNickname(``)

            client.channels.cache.get(log2).send(`${newUser} Adlı kişi isminden **${tag5}** sildi \n \`Alınan Rol:\` \`Tagges of Wiâ\` \n\n \`Kişi Bilgileri;\` \n \`Kişi İd:\` ${newUser.id} \n \`Kişi İsmi:\` ${newUser.tag} \n \`Kişi Etiketi:\` ${newUser} \n  \n\n \`Kişinin Eski İsimi:\` ${oldUser.tag} \n \`Kişinin Yeni İsimi:\` ${newUser.tag}`)
        } else if (!oldUser.username.includes(tag5) && newUser.username.includes(tag5)) {
            member.roles.add(roleID)
            client.channels.cache.get(chat).send(` ${newUser} \` Tag aldı selam verin.\``).then(x => x.delete({ timeout: 10000 }))
            client.channels.cache.get(log2).send(`${newUser} Adlı kişi ismine **${tag5}** tagını aldı \n \`Verilen Rol:\` \`Tagges of Wiâ\` \n\n \`Kişi Bilgileri;\` \n \`Kişi İd:\` ${newUser.id} \n \`Kişi İsmi:\` ${newUser.tag} \n \`Kişi Etiketi:\` ${newUser} \n  \n\n \`Kişinin Eski İsimi:\` ${oldUser.tag} \n \`Kişinin Yeni İsimi:\` ${newUser.tag}`)
        }
    }
     if (newUser.username !== oldUser.username) {
        if (oldUser.username.includes(tag6) && !newUser.username.includes(tag6)) {
            member.roles.set([unregister])
            member.roles.remove(roleID)
            member.setNickname(``)

            client.channels.cache.get(log2).send(`${newUser} Adlı kişi isminden **${tag6}** sildi \n \`Alınan Rol:\` \`Tagges of Wiâ\` \n\n \`Kişi Bilgileri;\` \n \`Kişi İd:\` ${newUser.id} \n \`Kişi İsmi:\` ${newUser.tag} \n \`Kişi Etiketi:\` ${newUser} \n  \n\n \`Kişinin Eski İsimi:\` ${oldUser.tag} \n \`Kişinin Yeni İsimi:\` ${newUser.tag}`)
        } else if (!oldUser.username.includes(tag6) && newUser.username.includes(tag6)) {
            member.roles.add(roleID)
            client.channels.cache.get(chat).send(` ${newUser} \` Tag aldı selam verin.\``).then(x => x.delete({ timeout: 10000 }))
            client.channels.cache.get(log2).send(`${newUser} Adlı kişi ismine **${tag6}** tagını aldı \n \`Verilen Rol:\` \`Tagges of Wiâ\` \n\n \`Kişi Bilgileri;\` \n \`Kişi İd:\` ${newUser.id} \n \`Kişi İsmi:\` ${newUser.tag} \n \`Kişi Etiketi:\` ${newUser} \n  \n\n \`Kişinin Eski İsimi:\` ${oldUser.tag} \n \`Kişinin Yeni İsimi:\` ${newUser.tag}`)
        }
    }

    if (newUser.discriminator !== oldUser.discriminator) {
        if (oldUser.discriminator == `${etiket}` && newUser.discriminator !== `${etiket}`) {
            member.roles.set([unregister])
            member.setNickname(``)
            client.channels.cache.get(log2).send(`${newUser} Adlı kişi isminden **#${etiket}** sildi \n \`Alınan Rol:\` \`Tagges of Wiâ\` \n\n \`Kişi Bilgileri;\` \n \`Kişi İd:\` ${newUser.id} \n \`Kişi İsmi:\` ${newUser.tag} \n \`Kişi Etiketi:\` ${newUser} \n  \n\n \`Kişinin Eski İsimi:\` ${oldUser.tag} \n \`Kişinin Yeni İsimi:\` ${newUser.tag}`)
        } else if (oldUser.discriminator !== `${etiket}` && newUser.discriminator == `${etiket}`) {
            member.roles.add(roleID)
            client.channels.cache.get(log2).send(`${newUser} Adlı kişi ismine **#${etiket}** tagını aldı \n \`Verilen Rol:\` \`Tagges of Wiâ\` \n\n \`Kişi Bilgileri;\` \n \`Kişi İd:\` ${newUser.id} \n \`Kişi İsmi:\` ${newUser.tag} \n \`Kişi Etiketi:\` ${newUser} \n  \n\n \`Kişinin Eski İsimi:\` ${oldUser.tag} \n \`Kişinin Yeni İsimi:\` ${newUser.tag}`)
            client.channels.cache.get(chat).send(` ${newUser} \` Tag aldı selam verin.\``).then(x => x.delete({ timeout: 10000 }))
        }
    }

})

client.login(ayar.bot.botToken).catch(err => { console.log('Bota giriş yapılırken başarısız olundu!!') })
