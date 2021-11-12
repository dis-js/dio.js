const { resolve, isAbsolute } = require("node:path");
const { readdirSync, existsSync } = require("node:fs");

const { Logger } = require("./Logger");

class Util extends null {
    static getFiles(path, only) {
        try {
            path = this.#getPath(path);
            if (!existsSync(path)) throw new Error("[GET FILES] - пути не существует", path);
            const files = readdirSync(path).filter((f) => f.endsWith(".js"));
            if (!Array.isArray(only)) return files.map((f) => resolve(path, f));
            return files.filter((f) => only.includes(f)).map((f) => resolve(path, f));
        } catch (error) {
            Logger.error(error);
        }
    }

    static getFilenames(path, only) {
        try {
            path = this.#getPath(path);
            if (!existsSync(path)) throw new Error("[GET FILENAMES] - пути не существует", path);
            const files = readdirSync(path).filter((f) => f.endsWith(".js"));
            if (!Array.isArray(only)) return files.map((f) => f.split(".js")[0]);
            return files.filter((f) => only.includes(f)).map((f) => f.split(".js")[0]);
        } catch (error) {
            Logger.error(error);
        }
    }

    static defaultRequire(files) {
        try {
            if (!Array.isArray(files)) throw new Error("[DEFAULT REQUIRE] - параметр fiels, должен быть типом Array", files);
            return files.map((f) => {
                if (!existsSync(f)) throw new Error("[DEFAULT REQUIRE] - пути не существует", f);
                const f = require(f);
                return new f();
            });
        } catch (error) {
            Logger.error(error);
        }
    }

    static #getPath(path) {
        if (isAbsolute(path)) return path;
        return resolve(path);
    }
}

exports.Util = Util;
