import axios, {AxiosInstance} from 'axios';
import {AxiosFactory} from '@/api/axios/axios.factory';
import {Injectable} from 'vue-typedi';

@Injectable()
export class AxiosService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = AxiosFactory.create();
  }

  public get() {
    return this.axiosInstance;
  }
}
