const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require('dotenv'); 
dotenv.config();
client.login(process.env.TOKEN);

const botPresence = require("./functions/botPresence");
const sendWojak = require('./functions/sendWojak');

client.on('message', async message => {
    let repliedMessage = null;
    if(message.content.toLowerCase().startsWith('jarvis')) {
        try {
            repliedMessage = await message.channel.messages.fetch(message.reference.messageID);
            sendWojak(repliedMessage);
        }
        catch(e){}

    }
})


client.on('ready', () => {
    console.log("good to go\n\nServers:");
    client.guilds.cache.forEach(g => {
        console.log(g.name);
    })
    console.log("\n");
    botPresence(client);
}); 