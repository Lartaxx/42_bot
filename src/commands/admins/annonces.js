const { Command } = require("sheweny");
const { ModalBuilder, TextInputBuilder, ActionRowBuilder} = require("discord.js");

module.exports = class annoncesCommand extends Command {
  constructor(client) {
    super(client, {
        name: "annonces",
        description: "Default description",
        type: "MESSAGE_COMMAND",
        category: "Other",
        userPermissions: ["ADMINISTRATOR"],
        channel: "GUILD",
      });
      this.row = client.options.ActionRowBuilder;
      this.modal = client.options.ModalBuilder;
      this.text = client.options.TextInputBuilder;
  }

  async execute(interaction) {
    console.log(ModalBuilder)
    const modal = new ModalBuilder()
      .setTitle("Création d'une annonce")
      .setCustomId("annonces_create");
    // Create text input fields
    const name = new TextInputBuilder()
      .setCustomId("name")
      .setLabel("Nom")
      .setPlaceholder("Nom")
      .setStyle(TextInputStyle.Short);
    const color = new TextInputBuilder()
      .setCustomId("color")
      .setLabel("Couleur")
      .setPlaceholder("Ex: #FFFFFF")
      .setStyle(TextInputStyle.Short);

    const content = new TextInputBuilder()
      .setCustomId("content")
      .setLabel("Contenu")
      .setStyle(TextInputStyle.Paragraph);
    const footer = new TextInputBuilder()
      .setCustomId("footer")
      .setLabel("Footer")
      .setStyle(TextInputStyle.Short);
    const rows = [];
    for (const component of [name, color, content, footer]) {
      rows.push(new ActionRowBuilder().addComponents([component]));
    }
    modal.addComponents(rows);
    await interaction.showModal(modal);
      await interaction.showModal(modal);
  }
};
