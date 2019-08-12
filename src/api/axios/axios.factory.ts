import axios, {AxiosInstance} from 'axios';
import {injectable} from 'inversify';

@injectable()
export class AxiosFactory {

  public static create(): AxiosInstance {
    return axios.create({
      baseURL: 'http://localhost:3000/',
    });
  }

}
