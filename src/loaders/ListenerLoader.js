const { Util } = require("../utils/Util");

class ListenerLoader extends null {
    static run(config) {
        const files = Util.getFiles("App/Listeners", config.discord.listeners);
        const requiredFiles = Util.defaultRequire(files);
        requiredFiles.forEach((f) => f.run());
    }
}

// requiredFiles.forEach((f) => {
//     const error = f.logs();
//     if (error) this.error = true;
// });
// if (this.error) throw new Error("[LISTENER] - Error loading");

// logs() {
//     const path = "App/Jobs" + "/" + this.constructor.name;
//     const files = this.all ? Util.getFiles(path) : Util.getFiles(path, this.actions);
//     console.log(this.constructor.name);
//     files.forEach((file) => {
//         try {
//             const f = require(file);
//             new f();
//             console.log("[SUCCESS] - " + file.split("\\")[file.split("\\").length - 1].split(".js")[0]);
//         } catch (error) {
//             this.error = true;
//             console.log("[ERROR] - " + file.split("\\")[file.split("\\").length - 1].split(".js")[0]);
//         }
//     });
//     console.log();
//     return this.error;
// }

exports.ListenerLoader = ListenerLoader;
