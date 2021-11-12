const { Logger } = require("../utils/Logger");

class BaseJob {
    get name() {
        return this.constructor.name[0].toLowerCase() + this.constructor.name.slice(1);
    }

    handle() {
        Logger.info("[BASE JOB] - Handle");
    }

    skip() {
        return false;
    }

    run(...args) {
        if (this.skip(...args)) return;
        this.handle(...args);
    }
}

exports.BaseJob = BaseJob;
