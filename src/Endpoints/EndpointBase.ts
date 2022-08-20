import { Client } from 'src/Client';
import { Helpers } from '../../src/Helpers/Helpers';

/**
 * class EndpointBase
 */
export class EndpointBase {
  /**
   * client
   */
  protected client: Client;
  
  /**
   * helpers
   */
  protected helpers: Helpers; 

  /**
   * Constructor
   * 
   * @param client The client instance.
   */
  constructor(client: Client) {
    this.client = client;
    this.helpers = new Helpers;
  }
}