const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async(msg) => {

//   if(!msg?.author.bot){
//     msg.author.send(`Echo ${msg.content}`)
//   }

 console.log(msg.content)

  if (!msg.content) {
    console.log(msg.content)
    msg.reply("graphy");
  }

});

client.login(process.env.TOKEN);