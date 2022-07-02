const { SelectMenu } = require("sheweny");

module.exports = class rolesAdd_SelectMenu extends SelectMenu {
  constructor(client) {
    super(client, ["select_roles"]);
  }

  async execute(interaction) {
    const roleSelected = interaction.guild.roles.cache.get(interaction.values[0]);
    if (interaction.member._roles.includes(interaction.values[0])) {
      interaction.member.roles.remove(interaction.values[0]);
      return interaction.reply({content: `Le rôle \`${roleSelected.name}\` vous a été retiré !`, ephemeral: true});
    }
    else {
      interaction.member.roles.add(interaction.values[0]);
      return interaction.reply({content: `Le rôle \`${roleSelected.name}\` vous a été ajouté !`, ephemeral: true});
    }
  }
};
