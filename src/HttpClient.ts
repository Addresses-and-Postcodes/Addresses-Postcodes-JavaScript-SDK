import axios from 'axios';

export class HttpClient {
  /**
   * HttpRequest|GET
   * 
   * @param uri The uri to call.
   * @param query The query params.
   * @returns AxiosResponse
   */
  public async get(uri: string, query: string = ''): Promise<any> {
    try {
      const {data} = await axios.get(uri + query);
      if (data.hasOwnProperty('error'))
      {throw new Error(data.error);}
      return data;
    } catch (error) {
      console.error(error.message);
      return {};
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
      if (data.hasOwnProperty('error'))
        throw new Error(data.error);
      return data;
    } catch (error) {
      console.error(error.message);
      return {};
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
      if (data.hasOwnProperty('error'))
        throw new Error(data.error);
      return data;
    } catch (error) {
      console.error(error.message);
      return {};
    }
  }
}