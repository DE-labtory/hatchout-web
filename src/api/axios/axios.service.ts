import axios, {AxiosInstance} from 'axios';
import {inject, injectable} from 'inversify';
import 'reflect-metadata';
import {TYPES} from '@/provider/types';
import {AxiosFactory} from '@/api/axios/axios.factory';

@injectable()
export class AxiosService {
  private hatchout: AxiosInstance;
  constructor(
    @inject(TYPES.AxiosFactory) axiosFactory: AxiosFactory,
  ) {
    // todo: move config to config file
    this.hatchout = axiosFactory.create('http//localhost:3000/');
  }
  public getHatchOut(): AxiosInstance {
    return this.hatchout;
  }
}
