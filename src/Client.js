"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const axios = require('axios').default;
/**
 * Client Class
 */
class Client {
    /**
     * constructor.
     */
    constructor(apikey) {
        /**
         * Host
         */
        this._host = "https://postcodes.test/";
        this._api_key = apikey;
    }
    /**
     * HTTP Request|GET
     *
     * @param uri api endpoint
     */
    async get(uri) {
        let url = new URL(uri, this._host);
        let endpoint = `${url.toString()}?key=${this._api_key}`;
        // HTTP REQUEST|GET
        axios.get(endpoint).then(response => { return response; }).catch(error => { return error; });
    }
}
exports.Client = Client;
//# sourceMappingURL=Client.js.map