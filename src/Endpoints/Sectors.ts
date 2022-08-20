import { EndpointBase } from './EndpointBase';

/**
 * Endpoint Sectors
 */
export class Sectors extends EndpointBase {
  /**
     * Retrieve a count of properties within a polygon and the polygon coordinates.
     * 
     * @param sector The full postcode sector.
     * @returns properties within a polygon and the polygon coordinates.
     */
  public async getSectorCountPath(sector: string): Promise<any> {
    return this.client.get(`/api/v3/sectors/${sector}/total`);
  }
}