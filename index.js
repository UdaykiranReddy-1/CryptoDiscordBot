const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async(msg) => {

  if(!msg?.author.bot){
    // msg.author.send(`Echo ${msg.content}`)
    msg.reply(`Echo ${msg.content}`)
  }

  // console.log(msg.content)
  // if (msg.content === "crypto") {
  //   msg.reply("graphy");
  // }

  // if (msg.content === "hello") {
  //   msg.reply("hi there!");
  // }

});


client.login(process.env.TOKEN);