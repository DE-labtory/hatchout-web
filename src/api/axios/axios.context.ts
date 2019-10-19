import {Service} from 'typedi';
import {AxiosSupplier} from '@/api/axios/axios.supplier';
import {AxiosStrategy, getStrategy} from '@/api/axios/axios.strategy';
import {AxiosRequestConfig, AxiosResponse, Method} from 'axios';

@Service()
export class AxiosContext {

  constructor(private axiosSupplier: AxiosSupplier) {}

  public async call<T>(method: Method, url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return await this.executeStrategy<T>(getStrategy(method), url, data, config);
  }
  private async executeStrategy<T>(strategy: AxiosStrategy, url: string, data?: any, config?: AxiosRequestConfig):
    Promise<T> {
    const axiosInstance = this.axiosSupplier.get();
    const response: AxiosResponse = await strategy.work<T>(axiosInstance)(url, data, config);
    return response.data;
  }

}
