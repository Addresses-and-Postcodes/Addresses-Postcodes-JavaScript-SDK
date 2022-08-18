/**
 * Client Class
 */
export class Client {
    /**
     * The api key.
     */
    private _api_key: string = ""

    /**
     * Host
     */
    private _host: string = "http://postcodes.test/api/v3/"

    /**
     * constructor.
     */
    constructor(apikey: string) {
        this._api_key = apikey
    }

    /**
     * HTTP Request|GET
     * 
     * @param uri api endpoint
     */
    public get(uri: string) {

    }
}