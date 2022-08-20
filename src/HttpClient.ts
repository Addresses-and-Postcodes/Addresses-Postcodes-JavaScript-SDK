import axios from 'axios';

export class HttpClient {
  /**
   * HttpRequest|GET
   * 
   * @param uri The uri to call.
   * @returns AxiosResponse
   */
  public async get(uri: string, query = ''): Promise<any> {
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
}