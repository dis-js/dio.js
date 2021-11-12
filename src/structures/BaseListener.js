const { Util } = require("../utils/Util");
const { Logger } = require("../utils/Logger");

class BaseListener extends null {
    get name() {
        return this.constructor.name[0].toLowerCase() + this.constructor.name.slice(1);
    }

    get type() {
        return "on";
    }

    get event() {
        return this.name;
    }

    run() {
        const path = "App/Jobs" + "/" + this.constructor.name;
        const files = this.all ? Util.getFiles(path) : Util.getFiles(path, this.actions);
        files.forEach((f) => {
            Logger.info({ listener: this.constructor.name, job: this.name });
            f.run();
        });
    }
}

exports.BaseListener = BaseListener;
