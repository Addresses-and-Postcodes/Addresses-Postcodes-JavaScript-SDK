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

    /**
     * Retrieve a list of properties within a postcode.
     * 
     * @param postcode Postcode being searched.
     * @returns A list of properties.
     */
    public propertiesListByPostcode(postcode: string): Promise<any> {
        return this.client.get(`/api/v3/postcodes/${postcode}/addresses`);
    }

    /**
     * Retrieve a count of properties within a polygon.
     * 
     * @param path array of [lat, lng] values of the polygon.
     * @returns A count of properties within a polygon.
     */
    public propertiesCountByPolygon(path: string[]): Promise<any> {
        const uri = this.helpers.pathPolygonConverter(path);
        return this.client.get(`/api/v3/properties/total/by/path`, uri)
    }

    /**
     * Retrieve a count of properties within radius.
     * 
     * @param lat latitude of the center point of your search.
     * @param lng longitude of the center point of your search.
     * @param radius Distance in meters from the center lat, lng.
     * @returns A count of properties within radius.
     */
    public propertiesCountByRadius(lat, lng, radius): Promise<any> {
        const uri = '&' + new URLSearchParams({lat: lat, lng: lng, radius: radius})
        return this.client.get(`/api/v3/properties/total/by/radius`, uri)
    }

    /**
     * Retrieve a count of properties a set buffer from a line.
     * 
     * @param path array of [lat, lng] values of the polygon.
     * @param radius Distance in meters from the center lat, lng.
     * @returns A count of properties a set buffer from a line.
     */
    public propertiesCountByLinePolygon(path: string[], radius: string): Promise<any> {
        const uri = this.helpers.pathPolygonConverter(path);
        const rad = '&' + new URLSearchParams({radius: radius}).toString()
        return this.client.get(`/api/v3/properties/list/by/line`, uri + rad)
    }
}
