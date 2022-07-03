const { Command } = require("sheweny");

module.exports = class informationsCommand extends Command {
  constructor(client) {
    super(client, {
        name: "informations",
        description: "Permet aux administrateurs de poster une information :-) ",
        type: "SLASH_COMMAND",
        category: "admin",
        channel: "GUILD",
        adminsOnly: true
      });
      this.modal = client.options.Modal;
      this.text = client.options.TextInputComponent;
      this.row = client.options.MessageActionRow;
  }

  async execute(interaction) {
    const infoModal = new this.modal()
      .setCustomId("create_information")
      .setTitle("Créer une information");

  const title = new this.text()
    .setCustomId("title")
    .setLabel("Titre de l'information")
    .setPlaceholder("Exemple : Nouveau check-in le xx/xx/xxxx")
    .setStyle("SHORT");

  const typeInfo = new this.text()
    .setCustomId("type")
    .setLabel("Type d'annonce")
    .setPlaceholder("PISCINE, ECOLE ou DISCORD")
    .setStyle("SHORT");

  const content = new this.text()
    .setCustomId("content")
    .setLabel("Contenu de l'information")
    .setPlaceholder("Exemple : Nouveau check-in publié sur le site d'admission, inscrivez-vous !!")
    .setStyle("PARAGRAPH");

    const rows = [];
    for (const component of [title,typeInfo,content]) {
      rows.push(new this.row().addComponents([component]));
    }
    infoModal.addComponents(rows);

  await interaction.showModal(infoModal);
  }
};
