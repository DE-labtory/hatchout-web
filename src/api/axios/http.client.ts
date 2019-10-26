import {Service} from 'typedi';
import {AxiosSupplier} from '@/api/axios/axios.supplier';
import {AxiosInstance, AxiosRequestConfig, AxiosResponse, Method} from 'axios';
import {AxiosMethod, getMethod} from '@/api/axios/axios.method';

@Service()
export class HttpClient {

  private axiosInstance: AxiosInstance;

  constructor(private axiosSupplier: AxiosSupplier) {
    this.axiosInstance = axiosSupplier.get();
  }

  public async call<T>(methodName: Method, url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const method: AxiosMethod = getMethod(methodName, this.axiosInstance);
    const response: AxiosResponse<T> = await method<T>(url, data, config);
    return response.data;
  }

}
