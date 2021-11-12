const { Client } = require("discord.js");

class ClientLoader extends null {
    static run(config) {
        return new Client(config.discord.intents);
    }
}

exports.ClientLoader = ClientLoader;
