class Logger extends null {
    static success(message) {
        console.log("[SUCCESS] - ", message);
    }

    static info(message) {
        console.log("[INFO] - ", message);
    }

    static error(error) {
        console.log("[ERROR] - ", error.message);
        console.dir(error);
    }
}

exports.Logger = Logger;
