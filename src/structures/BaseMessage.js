const { BaseJob } = require("./BaseJob");
const { App } = require("../core/App");

class BaseMessage extends BaseJob {
    skip(message) {
        return !(
            message.content.startsWith(App.config.discord.prefix) && message.content.slice(App.config.discord.prefix.length) === this.name
        );
    }
}

exports.BaseMessage = BaseMessage;
