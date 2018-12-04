const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let commander = new Discord.RichEmbed()
  .setDescription("All Commands That I Have | My Global Prefix Is * ")
  .setColor("#00ffe9")
  .addField("Help Command", " ============================== ")
  .addField("commands", "Check All The Commands!")
  .addField("Admin Commands", " ============================== ")
  .addField("addrole", "Usage: addrole (Name/id) (Role)")
  .addField("removerole", "Usage: removerole (Name/id) (Role)")
  .addField("tempmute", "Usage: tempmute (Name/id) (How Long s/h/d)")
  .addField("warn", "Usage: warn (Name/id) (Reason) 3x Warned = Kick ")
  .addField("warnlevel", "Usage: warnlevel (Name/id)")
  .addField("ban", "Usage: Ban (Name/id) (Reason)")
  .addField("kick", "Usage: Kick (Name/id) (Reason)")
  .addField("Public Commands", " ============================== ")
  .addField("brodcast", "Usage: Brodcast (@Brodcast) (Information)")
  .addField("profile", "Check Your Profile")
  .addField("serverinfo", "Check Server Status/Info")
  .addField("report", "Usage: Report (Name/id) (Reason)")
  .addField("botinfo", "Check Bot Status/Info")
  .addField("ping", "Check Your Ping To The Bot!")
  .addField("doggy", "fun command")
  .addField("cat", "fun command")
  .setTimestamp()

  return message.channel.send(commander);


}

module.exports.help = {
  name: "commands"
}
