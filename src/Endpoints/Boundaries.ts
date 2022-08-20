import { EndpointBase } from './EndpointBase';

/**
 * Endpoint Boundaries
 */
export class Boundaries extends EndpointBase {
  /**
   * Retrieve a list of coordinates to produce a polygon around the postcode area.
   * 
   * @param area Any part of a postcode, but must include the area.
   * @returns List of coordinates around the postcode area.
   */
  public async getAreaBoundaryPath(area: string): Promise<any> { 
    return this.client.get(`/api/v3/areas/${area}/path`);
  }

  /**
   * Retrieve a list of coordinates to produce a polygon around the postcode sector.
   * 
   * @param sector Any part of a postcode, but must include the sector.
   * @returns List of coordinates around the postcode sector.
   */
  public async getSectorBoundaryPath(sector: string): Promise<any> {
    return this.client.get(`/api/v3/sectors/${sector}/path`);
  }
}