/**
 * class Helpers
 */
export class Helpers {
  /**
     * Convert array path to string url.
     * 
     * @param path Array containing several latitude and longitude as parameters.
     * @returns All path in string url.
     */
  public pathPolygonConverter(path: string[]): string {
    let uri = '';
    for (const key in path) {
      uri += `&path[${key}][lat]=${path[key]['lat']}&path[${key}][lng]=${path[key]['lng']}`;
    }
    return uri;
  }
}
