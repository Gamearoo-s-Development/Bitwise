require('dotenv').config();
const { HelperUtils, HelperClient } = require("discord-helper.js");
const { Events, Collection } = require("discord.js");
const { Client, GatewayIntentBits } = require("discord.js");
const { NormalEndpoints, DemoEndpoints, ExecuteLogger } = require("ram-api.js");
const ramapievents = require("ram-api.js");
const bitwise = new Client({ intents: [GatewayIntentBits.Guilds]});
const path = require('node:path');
const fs = require("node:fs");

bitwise.commands = new Collection();
let logger = new ExecuteLogger("BitWise");
let utils = new HelperUtils();
let client = new HelperClient(bitwise);
let ramapi = new DemoEndpoints(5, 2);

const folderPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(folderPath);

for (const folder of commandFolders) {
    const commandPath = path.join(folderPath, folder);
    const commandFiles = fs.readdirSync(commandPath).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const filePath = path.join(commandPath, file);

        const command = require(filePath);

        if ('data' in command && 'execute' in command) {
            bitwise.commands.set(command.data.name, command);
            
        } else {
            logger.warnAsync(`The command at ${filePath} is missing a required "data" or "execute" property.`);
        }
    }
}




let ramapievent =  ramapievents.Events;

ramapievent.on("package-update", data => {
   logger.warnAsync(data, "index.js")
});

bitwise.once(Events.ClientReady, readyClient => {
    logger.infoAsync(`Ready! Logged in as ${readyClient.user.tag}`, "index.js");
})

bitwise.on(Events.InteractionCreate, interaction => {
    if(!interaction.isCommand()) return;

    if(!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if(!command) {
        logger.errorAsync(`No Command matching ${interaction.commandName} was found.`);
        
    }
})

bitwise.login(process.env.TOKEN);