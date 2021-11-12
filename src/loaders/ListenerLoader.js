const { Util } = require("../utils/Util");

class ListenerLoader extends null {
    static run(config) {
        const files = Util.getFiles("App/Listeners", config.discord.listeners);
        const requiredFiles = Util.defaultRequire(files);
        requiredFiles.forEach((f) => f.run());
    }
}

exports.ListenerLoader = ListenerLoader;
