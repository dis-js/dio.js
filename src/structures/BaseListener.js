const { Util } = require("../utils/Util");
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
        App.client[this.type](this.event, (...args) => this.start(...args));
        App.client.login(App.config.discord.token);
    }

    start(...args) {
        console.log(this.constructor.name);
        const jobs = this.getJobs();
        jobs.forEach((job) => job.run(...args));
    }

    getJobs() {
        const path = "App/Jobs" + "/" + this.constructor.name;
        const files = this.all ? Util.getFiles(path) : Util.getFiles(path, this.actions);
        const jobs = Util.defaultRequire(files);
        return jobs;
    }
}

exports.BaseListener = BaseListener;
