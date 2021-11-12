const { Logger } = require("../utils/Logger");

class BaseJob extends null {
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
