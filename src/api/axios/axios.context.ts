import {AxiosSupplier} from '@/api/axios/axios.supplier';
import {AxiosStrategy} from '@/api/axios/axios.strategy';
import {AxiosInstance, AxiosRequestConfig, AxiosResponse, Method} from 'axios';
import {Service} from 'typedi';

// todo: fix tsLint
@Service()
export class AxiosContext {

  constructor(private axiosSupplier: AxiosSupplier) {}

  public async executeStrategy<T>(strategy: AxiosStrategy): Promise<T> {
    const axiosInstance = this.axiosSupplier.get();
    const response: AxiosResponse = await strategy.call<T>(axiosInstance);
    return response.data;
  }

  public async call<T>(method: Method, url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {

    switch (method) {
      case 'get' || 'GET' : {
        // tslint:disable-next-line:new-parens max-classes-per-file
        return await this.executeStrategy<T>(new class implements AxiosStrategy {
          // tslint:disable-next-line:no-shadowed-variable
          public async call<T>(axiosInstance: AxiosInstance): Promise<AxiosResponse<T>> {
            return await axiosInstance.get<T>(url);
          }
        });
      }
      case 'delete' || 'DELETE' : {
        // tslint:disable-next-line:new-parens max-classes-per-file
        return await this.executeStrategy<T>(new class implements AxiosStrategy {
          // tslint:disable-next-line:no-shadowed-variable
          public async call<T>(axiosInstance: AxiosInstance): Promise<AxiosResponse<T>> {
            return await axiosInstance.delete<T>(url);
          }
        });
      }
      case 'post' || 'POST' : {
        // tslint:disable-next-line:new-parens max-classes-per-file
        return await this.executeStrategy<T>(new class implements AxiosStrategy {
          // tslint:disable-next-line:no-shadowed-variable
          public async call<T>(axiosInstance: AxiosInstance): Promise<AxiosResponse<T>> {
            return await axiosInstance.post<T>(url, data, config);
          }
        });
      }
      case 'put' || 'PUT' : {
        // tslint:disable-next-line:new-parens max-classes-per-file
        return await this.executeStrategy<T>(new class implements AxiosStrategy {
          // tslint:disable-next-line:no-shadowed-variable
          public async call<T>(axiosInstance: AxiosInstance): Promise<AxiosResponse<T>> {
            return await axiosInstance.put<T>(url, data, config);
          }
        });
      }
      default: {
        // todo: change to InvalidParameterException
        throw Error('not acceptable method');
      }
    }
  }
}
