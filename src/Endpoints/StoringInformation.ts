import { EndpointBase } from './EndpointBase';

/**
 * Endpoint Storing Information
 */
export class StoringInformation extends EndpointBase {
    /**
     * Get a list of all your saves searches - By polygon or radius.
     * 
     * @returns AxiosResponse
     */
    public getSavedSearches(): Promise<any> {
        return this.client.get('/api/v3/postcodes/door-drop')
    }

    /**
     * Save a Polygon or Radius search to your account.
     * 
     * @param name Give your search results a friendly name. Required
     * @param params[endpoint] Send the endpoint of the search type you are using. Valid values are: "/api/v3/properties/total/by/radius", "/api/v3/properties/total/by/path". Required
     * @param params[total] Number of search results found. Leave blank to calculate based on input.
     * @param params[path] Use if sending a polygon | array of lat, lng values.
     * @param params[lat] Use if sending a radius | latitude of the center point of your search.
     * @param params[lng] Use if sending a radius | longitude of the center point of your search.
     * @param params[radius] Use if sending a radius | Distance in meters from the center lat, lng.
     * @returns AxiosResponse
     */
    public saveSearch(params: object): Promise<any> {
        return this.client.post('/api/v3/postcodes/door-drop', params)
    }

    /**
     * Remove / hide a Polygon or Radius search to your account.
     * 
     * @param id ID of the search you wish to delete.
     * @returns AxiosResponse
     */
    public deleteSearch(id: string): Promise<any> {
        const uri = '&' + new URLSearchParams({id: id}).toString()
        return this.client.delete('/api/v3/postcodes/door-drop', uri)
    }
}