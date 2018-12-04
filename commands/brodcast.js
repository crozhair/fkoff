const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bcUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bcUser) return message.channel.send("Please Use This Format : brodcast (@brodcast) (information)");
  let bcInfo = args.join(" ").slice(22);

  let bcEmbed = new Discord.RichEmbed()
  .setDescription("~> Brodcast <~")
  .addField("Mentions To", `@everyone`)
  .setColor("RANDOM")
  .addField("Brodcasted By", `<@${message.author.id}> with ID: ${message.author.id}`)
  .addField("Brodcast At", message.channel)
  .addField("Time", message.createdAt)
  .addField("Information", bcInfo);

  let bcChannel = message.guild.channels.find(`name`, `brodcast`);
  if(!bcChannel) return message.channel.send("Please Ask The Owner/Create A brodcast Channel!");

  message.delete().catch(O_o=>{});
  bcChannel.send(bcEmbed);

}

module.exports.help = {
  name: "brodcast"
}
