const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let acmd = message.channel.send(`Pong =>` + (bot.ping)+`ms!`)

  return message.channel.send(acmd);
  
}

module.exports.help = {
  name: "ping"
}
