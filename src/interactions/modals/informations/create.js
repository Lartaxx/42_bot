const { Modal } = require("sheweny");
  
module.exports = class ModalAnnonce extends Modal {
  constructor(client) {
    super(client, ["create_information"]);
    this.embed = client.options.MessageEmbed;
    this.config = client.options.config;
  }
  
  async execute(modal) {
    await modal.deferUpdate();
    const title = modal.fields.getTextInputValue("title");
    const type = modal.fields.getTextInputValue("type");
    const content = modal.fields.getTextInputValue("content");
    if(!["PISCINE", "ECOLE", "DISCORD"].includes(type)) return modal.followUp({content: "Veuillez renter un type valide !", ephemeral: true});
    
    const infoEmbed = new this.embed()
      .setColor("#0D8BE2")
      .setTitle(`\`ℹ️\` • Nouvelle information : **${title}**`)
      .setDescription(content)
      .setTimestamp();
  const idRoleToTag = this.config.roles.commons.find(role => role.role === type.toLowerCase())?.id;
  return modal.guild.channels.cache.get(this.config.channels.specials.find(r => r.name === type.toLowerCase())?.id).send({embeds: [infoEmbed], content: `${modal.guild.roles.cache.get(idRoleToTag)}`})
  .then(() => {
    return modal.followUp({content: "Information bien envoyée !", ephemeral: true});
  })
  .catch((err) => {
    return modal.followUp({content: `Erreur : \`${err}\``, ephemeral: true});
  })
  }
};
