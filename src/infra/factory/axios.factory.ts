import axios, {AxiosInstance} from 'axios';
import {injectable} from 'inversify';
import {HttpAdapter} from '@/domain/http.adapter';
import 'reflect-metadata';
import {AdapterFactory} from '@/infra/factory/adapter.factory';

@injectable()
export class AxiosFactory implements AdapterFactory {
  public create(baseUrl: string): HttpAdapter {
    const axiosInstance: AxiosInstance = axios.create({
      baseURL: baseUrl,
    });

    axiosInstance.interceptors.response.use((response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
    return axiosInstance ;
  }

}
