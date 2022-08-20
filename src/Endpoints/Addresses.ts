import { EndpointBase } from './EndpointBase';

/**
 * Endpoint Addresses
 */
export class Addresses extends EndpointBase {

    /**
     * Retrieve a property by building name or number and postcode.
     * 
     * @param building Name or number of the building being searched for.
     * @param postcode Postcode being searched.
     * @returns A property by building name or number and postcode.
     */
    public searchForProperty(building: string, postcode: string): Promise<any> {
        const key = '&' + new URLSearchParams({key: this.client.apiKey}).toString()
        const uri = '&' + new URLSearchParams({building: building, postcode: postcode}).toString()
        return this.client.get(`/api/v3/paf/properties/lookup`, key + uri);
    }
}
