const { Util } = require("../utils/Util");
const { App } = require("../core/App");

class BaseListener {
    error = false;

    get name() {
        return this.constructor.name[0].toLowerCase() + this.constructor.name.slice(1);
    }

    get type() {
        return "on";
    }

    get event() {
        return this.name;
    }

    logs() {
        const path = "App/Jobs" + "/" + this.constructor.name;
        const files = this.all ? Util.getFiles(path) : Util.getFiles(path, this.actions);
        console.log(this.constructor.name);
        files.forEach((file) => {
            try {
                const f = require(file);
                new f();
                console.log("[SUCCESS] - " + file.split("\\")[file.split("\\").length - 1].split(".js")[0]);
            } catch (error) {
                this.error = true;
                console.log("[ERROR] - " + file.split("\\")[file.split("\\").length - 1].split(".js")[0]);
            }
        });
        console.log();
        return this.error;
    }

    run() {
        this.execute();
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
