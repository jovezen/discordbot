const Discord = require("discord.js"); // imports the discord library
const fs = require("fs"); // imports the file io library

const client = new Discord.Client(); // creates a discord client
const token = fs.readFileSync("token.txt").toString(); // gets your token from the file

client.once("ready", () => { // prints "Ready!" to the console once the bot is online
    console.log("Ready!");
});

client.login(token)

function random({ message }) {
    const number = Math.random(); // generates a random number
    message.channel.send(number.toString()); // sends a message to the channel with the number
}
async function test({ message, args }) {
    console.log(message);
    if (message.channel.type === "dm" && message.author.discriminator == '7222') {
        message.channel.send("Hi "+message.author.username); // sends a message to the channel with the number
        message.react('👌');
    }
    else {
        message.channel.send("Just admin can run")
    }

}

function reactme({message}){
    message.react('👌');
}

let commands = new Map();
commands.set("random", random);
commands.set("test", test);
commands.set("reactme", reactme);

client.on("message", message => {
    if (message.content[0] === '?') {
        const messageSplitter = message.content.split(" ")
        const command = messageSplitter[0].substr(1); // gets the command name
        const args = messageSplitter.slice(1)
        if (commands.has(command)) { // checks if the map contains the command
            commands.get(command)({ message, args }) // runs the command
        }
        else {
            message.channel.send(`Cmd ${command} is not recognized`)
        }
    }
});