//burasının ne olduğunu bilmiyorsanız lütfen hiç bir koda dokunmayın.

const { InteractionType } = require("discord.js")
const { EmbedBuilder } = require("@discordjs/builders");

module.exports = {
	name: 'interactionCreate',
	async execute(interaction, client) {
		let help = global.help = require("../base/settings.json");
		const embed = new EmbedBuilder()
			.setFooter({ text: `${interaction.guild.name}`, iconURL: client.user.avatarURL({ dynamic: true }) })
			.setTimestamp()
		if (interaction.type !== InteractionType.ApplicationCommand) {
			//butona basıldığında burda hangi işlemleri yapacağınızı belirleyebilirsiniz.
		} else {
			const command = client.slashcommands.get(interaction.commandName);
			if (!command) return;
			try {

				command.execute(client, interaction, embed);
			} catch (error) {
				console.error(error);
				interaction.reply({ content: 'Komutta bir sorun oluştu lütfen daha sonra tekrar dene 😔', ephemeral: true });
			}
		}
	},
};
