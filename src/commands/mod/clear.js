const { Command } = require("sheweny");

module.exports = class clearCommand extends Command {
  constructor(client) {
    super(client, {
        name: "clear",
        description: "Default description",
        type: "MESSAGE_COMMAND",
        category: "Other",
        channel: "GUILD",
        userPermissions: ["MANAGE_MESSAGES"],
        args: [
          {
            name: "number_delete",
            type: "STRING",
            default: "1"
          }
        ]
      }
    );
  }

  async execute(message, args) {
    const { number_delete } = args;
    message.channel.bulkDelete(parseInt((number_delete)))
    .then(messages => message.channel.send(`Nombre de messages supprimés : ${messages.size}`)).then(msg => msg.delete({timeout: 5000}))
    .catch(console.error);  }
};
