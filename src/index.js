const { ShewenyClient } = require("sheweny");
const config = require("../config.json");
const { ModalBuilder, TextInputBuilder, ActionRowBuilder} = require("discord.js");
const client = new ShewenyClient({
  ModalBuilder,
  TextInputBuilder, 
  ActionRowBuilder,
  config,
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
  partials: ["GUILD_MEMBER"],
  managers: {
    commands: {
      directory: "./commands",
      autoRegisterApplicationCommands: true,
      prefix: "!",
    },
    events: {
      directory: "./events",
    },
    buttons: {
      directory: "./interactions/buttons",
    },
    selectMenus: {
      directory: "./interactions/selectmenus",
    },
    inhibitors: {
      directory: "./inhibitors",
    },
    modals: {
      directory: "./interactions/modals",
    }
  },
  mode : "development", // Change to production for production bot
});

client.login(config.DISCORD_TOKEN);
