import { EndpointBase } from './EndpointBase';

/**
 * Endpoint Postcodes
 */
export class Postcodes extends EndpointBase {
  /**
     * Retrieve a count of postcodes within a polygon.
     * 
     * @param path array of [lat, lng] values of the polygon.
     * @returns count of postcodes.
     */
  public postcodeCountByPolygon(path: string[]): Promise<any> {
    const uri = this.helpers.pathPolygonConverter(path);
    return this.client.get('/api/v3/postcodes/total/by/path', uri);
  }

  /**
   * Retrieve a list of postcodes within a polygon.
   * 
   * @param path array of [lat, lng] values of the polygon.
   * @returns list of postcodes.
   */
  public postcodeListByPolygon(path: string[]): Promise<any> {
    const uri = this.helpers.pathPolygonConverter(path);
    return this.client.get('/api/v3/postcodes/list/by/path', uri);
  }

  /**
   * Retrieve the geographical path of a postcode.
   * 
   * @param postcode The full postcode.
   * @returns The geographical path of a postcode.
   */
  public getGeographicalPathOfPostcode(postcode: string): Promise<any> {
    return this.client.get(`/api/v3/postcodes/${postcode}/geo/path`);
  }
}
