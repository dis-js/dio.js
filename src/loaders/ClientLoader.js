const { Client } = require("discord.js");

class ClientLoader extends null {
    static run(config) {
        return new Client({ intents: config.discord.intents });
    }
}

exports.ClientLoader = ClientLoader;
