const { Util } = require("../utils/Util");

class ConfigLoader extends null {
    static run() {
        const files = Util.getFiles("Config");
        const config = {};
        files.forEach((f) => Object.assign(config, { ...require(f) }));
        return config;
    }
}

exports.ConfigLoader = ConfigLoader;
