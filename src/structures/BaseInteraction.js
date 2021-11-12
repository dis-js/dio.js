const { BaseJob } = require("./BaseJob");

class BaseInteraction extends BaseJob {
    skip(interaction) {
        return interaction.commandName !== this.name;
    }
}

exports.BaseInteraction = BaseInteraction;
