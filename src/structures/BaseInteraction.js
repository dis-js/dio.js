const { BaseJob } = require("./BaseJob");

class BaseInteraction extends BaseJob {
    handle() {
        Logger.info("[BASE INTERACTION] - Handle");
    }

    skip(interaction) {
        if (!interaction.isCommand()) return true;
        console.log("Я тут - skip = ", !(interaction.commandName === this.name));
        return !(interaction.commandName === this.name);
    }
}

exports.BaseInteraction = BaseInteraction;
