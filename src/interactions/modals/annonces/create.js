const { Modal } = require("sheweny");
  
module.exports = class ModalAnnonce extends Modal {
  constructor(client) {
    super(client, ["annonces_create"]);
  }
  
  async execute(modal) {
    console.log(modal)
  }
};
