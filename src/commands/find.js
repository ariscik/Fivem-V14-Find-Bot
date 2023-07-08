
const { EmbedBuilder, ActionRowBuilder, ButtonStyle, ButtonBuilder } = require("discord.js");
const { FivemServer } = require("full-fivem-api")
module.exports = {
    slash: false,
    enable: true,
    name: ["find", "bul", "oyuncubul"],
    async execute(client, message, args, embed) {
        if (!message.member.roles.cache.get(help.yetkiliid)) return;

        let deger = args[0];
        let oyuncu = args[1];

        if (!deger) return message.channel.send({ content: `Belirli bir değer belirtmelisin! \`id - hex - discord\`` });
        if (!oyuncu) return message.channel.send({ content: `Kimi bulmak istiyorsun ?` })
        const server = new FivemServer(help.serverIP);
        const status = await server.fetch();


        if (status.online) {
            if (deger == "id") {
                await server.fetchPlayers();
                let bulunan = server.players.find(e => e.id == oyuncu)
                if (!bulunan) return message.channel.send({ content: `Oyuncu aktif değil!` })
                message.channel.send({
                    embeds: [embed.setDescription(`
Kullanıcı bulundu bilgieri aşağıda belirtilmiştir.
    
> Oyuncu ID : ${bulunan.id}
> Oyuncu Hex ID : ${bulunan.identifiers.steam ? bulunan.identifiers.steam : "Bulunamadı."}
> Oyuncu License : ${bulunan.identifiers.license2 ? bulunan.identifiers.license2 : "Bulunamadı."}
> Oyuncu Discord : ${bulunan.identifiers.discord ? bulunan.identifiers.discord : "Bulunamadı."} - ${bulunan.identifiers.discord ? `<@${bulunan.identifiers.discord}>` : "Bulunamadı."}
> Oyuncu XBL : ${bulunan.identifiers.xbl ? bulunan.identifiers.xbl : "Bulunamadı."}
> Oyuncu Live : ${bulunan.identifiers.live ? bulunan.identifiers.live : "Bulunamadı."}
> Oyuncu Fivem : ${bulunan.identifiers.fivem ? bulunan.identifiers.fivem : "Bulunamadı."}
> Oyuncu Fivem Nick : ${bulunan.name}
> Oyuncu Ping : ${bulunan.ping}
          `)]
                })
            } else if (deger == "hex") {
                await server.fetchPlayers();
                let bulunan = server.players.find(e => e.identifiers.steam == oyuncu)
                if (!bulunan) return message.channel.send({ content: `Oyuncu aktif değil!` })

                message.channel.send({
                    embeds: [embed.setDescription(`
Kullanıcı bulundu bilgieri aşağıda belirtilmiştir.
    
> Oyuncu ID : ${bulunan.id}
> Oyuncu Hex ID : ${bulunan.identifiers.steam ? bulunan.identifiers.steam : "Bulunamadı."}
> Oyuncu License : ${bulunan.identifiers.license2 ? bulunan.identifiers.license2 : "Bulunamadı."}
> Oyuncu Discord : ${bulunan.identifiers.discord ? bulunan.identifiers.discord : "Bulunamadı."} - ${bulunan.identifiers.discord ? `<@${bulunan.identifiers.discord}>` : "Bulunamadı."}
> Oyuncu XBL : ${bulunan.identifiers.xbl ? bulunan.identifiers.xbl : "Bulunamadı."}
> Oyuncu Live : ${bulunan.identifiers.live ? bulunan.identifiers.live : "Bulunamadı."}
> Oyuncu Fivem : ${bulunan.identifiers.fivem ? bulunan.identifiers.fivem : "Bulunamadı."}
> Oyuncu Fivem Nick : ${bulunan.name}
> Oyuncu Ping : ${bulunan.ping}
          `)]
                })
            } else if (deger == "discord") {
                await server.fetchPlayers();
                let bulunan = server.players.find(e => e.identifiers.discord == oyuncu)
                if (!bulunan) return message.channel.send({ content: `Oyuncu aktif değil!` })

                message.channel.send({
                    embeds: [embed.setDescription(`
Kullanıcı bulundu bilgieri aşağıda belirtilmiştir.
    
> Oyuncu ID : ${bulunan.id}
> Oyuncu Hex ID : ${bulunan.identifiers.steam ? bulunan.identifiers.steam : "Bulunamadı."}
> Oyuncu License : ${bulunan.identifiers.license2 ? bulunan.identifiers.license2 : "Bulunamadı."}
> Oyuncu Discord : ${bulunan.identifiers.discord ? bulunan.identifiers.discord : "Bulunamadı."} - ${bulunan.identifiers.discord ? `<@${bulunan.identifiers.discord}>` : "Bulunamadı."}
> Oyuncu XBL : ${bulunan.identifiers.xbl ? bulunan.identifiers.xbl : "Bulunamadı."}
> Oyuncu Live : ${bulunan.identifiers.live ? bulunan.identifiers.live : "Bulunamadı."}
> Oyuncu Fivem : ${bulunan.identifiers.fivem ? bulunan.identifiers.fivem : "Bulunamadı."}
> Oyuncu Fivem Nick : ${bulunan.name}
> Oyuncu Ping : ${bulunan.ping}
          `)]
                })
            } else {
                message.channel.send({ content: `Doğru bir değer belirtmedin. \`id - hex - discord\`` })
            }
        } else {
            message.channel.send({ content: `Sunucu şuanda offline!` })
        }

    },
};
