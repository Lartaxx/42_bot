const { Command } = require("sheweny");

module.exports = class testwaveCommand extends Command {
  constructor(client) {
    super(client, {
        name: "testwave",
        description: "Default description",
        type: "MESSAGE_COMMAND",
        category: "Other",
        channel: "GUILD"
      }
      );
      this.config = client.options.config;
    }

  async execute(message) {
    const config = this.config;
    return message.channel.send(`${config.emojis.hello} souhaitons la bienvenue à ${message.author} !`);
    
  }
};
