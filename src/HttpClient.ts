import axios from 'axios';

export class HttpClient {
  /**
   * HttpRequest|GET
   * 
   * @param uri The uri to call.
   * @param query The query params.
   * @returns AxiosResponse
   */
  public async get(uri: string, query = ''): Promise<any> {
    try {
      const {data} = await axios.get(uri + query);
      if (Object.prototype.hasOwnProperty.call(data, 'error'))
      {throw new Error(data.error);}
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /**
   * HttpRequest|POST
   * 
   * @param uri The uri to call.
   * @returns AxiosResponse
   */
  public async post(uri: string, params: object): Promise<any> {
    try {
      const {data} = await axios.post(uri, params);
      if (Object.prototype.hasOwnProperty.call(data, 'error'))
      {throw new Error(data.error);}
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /**
   * HttpRequest|DELETE
   * 
   * @param uri The uri to call.
   * @returns AxiosResponse
   */
  public async delete(uri: string): Promise<any> {
    try {
      const {data} = await axios.delete(uri);
      if (Object.prototype.hasOwnProperty.call(data, 'error'))
      {throw new Error(data.error);}
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}