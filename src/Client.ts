const axios = require('axios').default;

/**
 * Client Class
 */
export class Client {
  /**
     * The api key.
     */
  private _api_key: string;

  /**
     * Host
     */
  private _host = 'https://postcodes.test/';

  /**
     * constructor.
     */
  constructor(apikey: string) {
    this._api_key = apikey;
  }

  /**
     * HTTP Request|GET
     * 
     * @param uri api endpoint
     */
  public async get(uri: string): Promise<any> {
    const url = new URL(uri, this._host);
    const endpoint = `${url.toString()}?key=${this._api_key}`;

    // HTTP REQUEST|GET
    axios.get(endpoint).then(response => { return response; }).catch(error => { return error; });
  }
}