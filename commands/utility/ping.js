const { SlashCommandBuilder, CommandInteraction } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName('ping').setDescription('Replies with a Pong!'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        await interaction.reply('Pong!');

    }
}