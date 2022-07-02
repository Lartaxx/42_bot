const { Modal } = require("sheweny");
  
module.exports = class ModalAnnonce extends Modal {
  constructor(client) {
    super(client, ["annonces_create"]);
    this.embed = client.options.MessageEmbed;
    this.config = client.options.config;
  }
  
  async execute(modal) {
    await modal.deferUpdate();
    const title = modal.fields.getTextInputValue("name");
    const content = modal.fields.getTextInputValue("content");
    
    const annoncesEmbed = new this.embed()
      .setColor("#DFE20D")
      .setTitle(`Nouvelle annonce : **${title}**`)
      .setDescription(content)
      .setTimestamp();

      return modal.guild.channels.cache.get(this.config.channels.annonces).send({content: "@everyone", embeds: [annoncesEmbed]});
  }
};
