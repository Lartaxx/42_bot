const { Command } = require("sheweny");

module.exports = class rolesCommand extends Command {
  constructor(client) {
    super(client, {
        name: "roles",
        description: "Permet aux administrateurs d'envoyer la fonction pour vous donner vos rôles :-)",
        type: "SLASH_COMMAND",
        category: "admin ",
        channel: "GUILD",
        adminsOnly: true
      });
      this.embed = client.options.MessageEmbed;
      this.select = client.options.MessageSelectMenu;
      this.row = client.options.MessageActionRow;
      this.config = client.options.config;
  }

  async execute(interaction) {
    const roles = [];
    this.config.roles.commons.forEach(role => {
      roles.push({
        label: role.name, 
        description: role.description, 
        value: role.id, 
        emoji: role.emoji
      });
    })
    const rolesSelect = new this.select()
      .setCustomId("select_roles")
      .setPlaceholder("Veuillez choisir le rôle que vous voulez.")
      .addOptions(roles)

  const rolesRow = new this.row()
    .addComponents(rolesSelect);

    return interaction.guild.channels.cache.get(this.config.channels.roles).send({embeds: [new this.embed().setTitle("Choisissez vos rôles !").setColor("#0D8BE2")], components: [rolesRow]})
    .then(() => {
      return interaction.reply({content: "Fonction \`role\` envoyée avec succès !", ephemeral: true});
    })
    .catch((err) => {
      return interaction.reply({content: `Erreur : \`${err}\``, ephemeral: true});
    })
  }
};
