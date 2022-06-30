const { Event } = require("sheweny");

module.exports = class guildMemberAddEvent extends Event {
  constructor(client) {
    super(client, "guildMemberAdd", {
      description: "Default description",
      once: false,
    });
    this.config = client.options.config;
  }

  execute(member) {
    const config = this.config;
    member.roles.add(config.roles.commons.student);
    return member.guild.channels.cache.get(config.channels.hello).send(`${config.emojis.hello} souhaitons la bienvenue à ${member} !`);
  }
};
