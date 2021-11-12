const { Util } = require("../utils/Util");

class ListenerLoader extends null {
    static run() {
        const files = Util.getFiles("App/Listeners");
        const requiredFiles = Util.defaultRequire(files);
        requiredFiles.forEach((f) => f.run());
    }
}

exports.ListenerLoader = ListenerLoader;
