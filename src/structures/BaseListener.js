const { Util } = require("../utils/Util");
const { Logger } = require("../utils/Logger");

const { App } = require("../core/App");

class BaseListener {
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
        this.logs();
        this.execute();
    }

    logs() {
        const path = "App/Jobs" + "/" + this.constructor.name;
        const files = this.all ? Util.getFiles(path) : Util.getFiles(path, this.actions);
        const requiredFiles = Util.defaultRequire(files);
        console.log(this.constructor.name);
        if (requiredFiles && requiredFiles.length === 0) console.log();
        if (!requiredFiles) return;
        requiredFiles.forEach((f, i) => {
            console.log("[SUCCESS]  " + f.constructor.name);
            if (requiredFiles.length - 1 === i) return console.log();
        });
    }

    execute() {
        App.client[this.type](this.event, (...args) => this.start(...args));
        App.client.login(App.config.discord.token);
    }

    start(...args) {
        const path = "App/Jobs" + "/" + this.constructor.name;
        const files = this.all ? Util.getFiles(path) : Util.getFiles(path, this.actions);
        const requiredFiles = Util.defaultRequire(files);
        requiredFiles.forEach((f) => {
            f.run(...args);
        });
    }
}

exports.BaseListener = BaseListener;
