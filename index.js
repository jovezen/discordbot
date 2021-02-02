const Discord = require("discord.js"); // imports the discord library
const fs = require("fs"); // imports the file io library

const client = new Discord.Client(); // creates a discord client
const token = fs.readFileSync("token.txt").toString(); // gets your token from the file

client.once("ready", () => { // prints "Ready!" to the console once the bot is online
	console.log("Ready!");
});

client.login(token)
