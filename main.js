const Discord = require("discord.js");
const token = require("./secret.js");
const client = new Discord.Client();

const delayToDeleteMessage = 120;  // seconds

client.on("ready", () => {
    console.log("Successfully logged into client.");
});

client.on("message", msg => {
    const deleteMessage = message => {
        console.log(`Deleting message:\n${message}\n`);
        message.delete();
    }
    setTimeout(deleteMessage, 1000 * delayToDeleteMessage, msg);
});

client.login(token);

// invite link: https://discord.com/oauth2/authorize?client_id=764436784561520650&scope=bot