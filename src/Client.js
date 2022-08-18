"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/**
 * Client Class
 */
class Client {
    /**
     * constructor.
     */
    constructor(apikey) {
        /**
         * The api key.
         */
        this._api_key = "";
        /**
         * Host
         */
        this._host = "http://postcodes.test/api/v3/";
        this._api_key = apikey;
    }
    /**
     * HTTP Request|GET
     *
     * @param uri api endpoint
     */
    get(uri) {
    }
}
exports.Client = Client;
//# sourceMappingURL=Client.js.map