import { Addresses } from './Endpoints/Addresses';
import { Boundaries } from './Endpoints/Boundaries';
import { PostcodeInformation } from './Endpoints/PostcodeInformation';
import { Postcodes } from './Endpoints/Postcodes';
import { Sectors } from './Endpoints/Sectors';
import { HttpClient } from './HttpClient';

/**
 * Client Class
 */
export class Client {
  /**
    * The api key.
    */
  private _api_key: string;
  
  /**
   * HttpClient Instance.
   */
  private _httpClient: HttpClient;

  /**
    * Host
    */
  private _host = 'https://postcodes.test/';

  /**
    * Constructor
    * 
    * @param apikey The api key.
    */
  constructor(apikey: string) {
    this._api_key = apikey;
    this._httpClient = new HttpClient();
  }

  public get apiKey(): string {
    return this._api_key;
  }

  /**
     * HTTP Request|GET
     * 
     * @param uri api endpoint
     */
  public get(uri: string, query = ''): any {
    const url = new URL(uri, this._host);
    const endpoint = `${url.toString()}?key=${this._api_key}`;
    return this._httpClient.get(endpoint, query);
  }

  /**
   * Instance of Boundaries.
   * 
   * @returns Boundaries
   */
  public boundaries(): Boundaries {
    return new Boundaries(this);
  }

  /**
   * Instance of Sectors
   * 
   * @returns Sectors
   */
  public sectors(): Sectors {
    return new Sectors(this);
  }

  /**
   * Instance of Postcodes
   * 
   * @returns Postcodes
   */
  public postcodes(): Postcodes {
    return new Postcodes(this);
  }

  /**
   * Instance of Addresses
   * 
   * @returns Addresses
   */
  public addresses(): Addresses {
    return new Addresses(this);
  }

  /**
   * Instance of PostcodeInformation
   * 
   * @returns PostcodeInformation
   */
  public postcodeInformation(): PostcodeInformation {
    return new PostcodeInformation(this)
  }
}