import axios, {AxiosInstance} from 'axios';
import {injectable} from 'inversify';

@injectable()
export class AxiosFactory {
  public create(baseUrl: string): AxiosInstance {
    return axios.create({
      baseURL: baseUrl,
    });
  }
}
