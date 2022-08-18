/**
 * Client Class
 */
export declare class Client {
    /**
     * The api key.
     */
    private _api_key;
    /**
     * Host
     */
    private _host;
    /**
     * constructor.
     */
    constructor(apikey: string);
    /**
     * HTTP Request|GET
     *
     * @param uri api endpoint
     */
    get(uri: string): void;
}
