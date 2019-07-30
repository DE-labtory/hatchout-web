import axios, {AxiosInstance} from 'axios';
import {injectable} from 'inversify';
import 'reflect-metadata';

@injectable()
export class AxiosFactory {
  public create(baseUrl: string): AxiosInstance {
    return axios.create({
      baseURL: baseUrl,
    });
  }
}
