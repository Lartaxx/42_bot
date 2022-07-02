const { Command } = require("sheweny");

module.exports = class annoncesCommand extends Command {
  constructor(client) {
    super(client, {
        name: "annonces",
        description: "Permet aux administrateurs de créer une annonce :-)",
        type: "SLASH_COMMAND",
        category: "Other",
        adminsOnly: true,
        channel: "GUILD",
      });
      this.row = client.options.MessageActionRow;
      this.modal = client.options.Modal;
      this.text = client.options.TextInputComponent;
  }

  async execute(interaction) {
    const modal = new this.modal()
      .setTitle("Création d'une annonce")
      .setCustomId("annonces_create");
    // Create text input fields
    const name = new this.text()
      .setCustomId("name")
      .setLabel("Titre de l'annonce")
      .setPlaceholder("Exemple : Création d'un tout nouveau discord !")
      .setStyle("SHORT");
    const content = new this.text()
      .setCustomId("content")
      .setLabel("Contenu de l'annonce")
      .setPlaceholder("Exemple : Voici ce tout nouveau discord !")
      .setStyle("PARAGRAPH");

    const rows = [];
    for (const component of [name,content]) {
      rows.push(new this.row().addComponents([component]));
    }
    modal.addComponents(rows);
    await interaction.showModal(modal);
  }
};
