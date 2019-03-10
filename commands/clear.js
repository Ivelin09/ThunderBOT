const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    const command = args.shift().toLowerCase()
    const cmd = bot.commands.get(command)
    if (!cmd) return
    cmd.run(bot, message, args) 

      if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
      if(!args[0]) return errors.noPerms(message, "MANAGE_MESSAGES");
      message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
      });
    
    }

module.exports.help = {
  name: "clear"
}