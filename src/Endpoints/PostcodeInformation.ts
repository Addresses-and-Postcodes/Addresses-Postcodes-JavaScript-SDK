import { EndpointBase } from './EndpointBase';

/**
 * Endpoint Postcode Information
 */
export class PostcodeInformation extends EndpointBase {
  /**
     * Returns latitude & longitude centroid for the postcode, County and town.
     * 
     * @param postcode Postcode to lookup.
     * @returns latitude & longitude centroid for the postcode.
     */
  public postcodeGEOInformation(postcode: string): Promise<any> {
    return this.client.get(`/api/v3/postcodes/${postcode}/geo`);
  }
}
