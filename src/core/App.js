const { ClientLoader } = require("../loaders/ClientLoader");
const { ConfigLoader } = require("../loaders/ConfigLoader");
const { ListenerLoader } = require("../loaders/ListenerLoader");

const Events = require("./Events");

class App extends null {
    config;
    client;
    events = new Events();

    init() {
        this.#loadingConfig();
        this.#initClient();
        this.#initListeners();
    }

    #loadingConfig() {
        this.config = ConfigLoader.run();
    }

    #initClient() {
        this.client = ClientLoader.run(this.config);
    }

    #initListeners() {
        ListenerLoader.run();
    }
}

exports.App = new App();
