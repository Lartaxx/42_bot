const { Command } = require("sheweny");

module.exports = class clearCommand extends Command {
  constructor(client) {
    super(client, {
        name: "clear",
        description: "Permet aux administrateurs de clear des messages :-)",
        type: "SLASH_COMMAND",
        category: "Other",
        channel: "GUILD",
        userPermissions: ["MANAGE_MESSAGES"],
        options: [
          {
            name: "number_delete",
            description: "Le nombre de messages à supprimer?",
            type: "STRING",
            required: true
          }
        ]
      }
    );
  }

  async execute(interaction) {
    const number_delete = interaction.options.getString("number_delete", true);
    interaction.channel.bulkDelete(parseInt((number_delete)))
    .then(msg => {
      return interaction.reply({content: `${msg.size} message(s) supprimé(s) !`, ephemeral: true})
    })
    .catch(err => {
      return interaction.reply({content: `Erreur : \`${err}\``, ephemeral: true});
    })
  }
};
