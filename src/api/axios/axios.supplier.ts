import axios, {AxiosInstance} from 'axios';
import {Service} from 'typedi';

@Service()
export class AxiosSupplier {
  private axiosInstace: AxiosInstance;
  constructor() {
    this.axiosInstace = axios.create({
      baseURL: 'http://localhost:3000/',
    });
  }

  public get(): AxiosInstance {
    return this.axiosInstace;
  }
}
