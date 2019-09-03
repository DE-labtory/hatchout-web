import {AxiosInstance, AxiosResponse} from 'axios';

export interface AxiosStrategy {
  call<T>(axiosInstance: AxiosInstance): Promise<AxiosResponse<T>>;
}
