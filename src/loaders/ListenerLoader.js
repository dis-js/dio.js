const { Util } = require("../utils/Util");

class ListenerLoader extends null {
    error = false;

    static run(config) {
        const files = Util.getFiles("App/Listeners", config.discord.listeners);
        const requiredFiles = Util.defaultRequire(files);
        requiredFiles.forEach((f) => {
            const error = f.logs();
            if (error) this.error = true;
        });
        if (this.error) throw new Error("[LISTENER] - Error loading");
        requiredFiles.forEach((f) => f.run());
    }
}

exports.ListenerLoader = ListenerLoader;
