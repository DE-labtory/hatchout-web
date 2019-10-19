import {AxiosInstance, AxiosRequestConfig, AxiosResponse, Method} from 'axios';

export interface AxiosStrategy {
  work<T>(axiosInstance: AxiosInstance): (url: string, data?: any, config?: AxiosRequestConfig) =>
    Promise<AxiosResponse<T>>;
}


const AxiosStrategies = new Map<Method, AxiosStrategy>();
AxiosStrategies.set('get', {
  work<T>(axiosInstance: AxiosInstance): (url: string) => Promise<AxiosResponse<T>> {
    return async (url: string) => await axiosInstance.get<T>(url);
  },
});
AxiosStrategies.set('GET', {
  work<T>(axiosInstance: AxiosInstance): (url: string) => Promise<AxiosResponse<T>> {
    return async (url: string) => await axiosInstance.get<T>(url);
  },
});
AxiosStrategies.set('delete', {
  work<T>(axiosInstance: AxiosInstance): (url: string) => Promise<AxiosResponse<T>> {
    return async (url: string) => await axiosInstance.delete<T>(url);
  },
});
AxiosStrategies.set('DELETE', {
  work<T>(axiosInstance: AxiosInstance): (url: string) => Promise<AxiosResponse<T>> {
    return async (url: string) => await axiosInstance.delete<T>(url);
  },
});

AxiosStrategies.set('post', {
  work<T>(axiosInstance: AxiosInstance): (url: string, data?: any, config?: AxiosRequestConfig)
    => Promise<AxiosResponse<T>> {
    return (url: string, data?: any, config?: AxiosRequestConfig) => axiosInstance.post(url, data, config);
  },
});
AxiosStrategies.set('POST', {
  work<T>(axiosInstance: AxiosInstance): (url: string, data?: any, config?: AxiosRequestConfig)
    => Promise<AxiosResponse<T>> {
    return (url: string, data?: any, config?: AxiosRequestConfig) => axiosInstance.post(url, data, config);
  },
});
AxiosStrategies.set('put', {
  work<T>(axiosInstance: AxiosInstance): (url: string, data?: any, config?: AxiosRequestConfig)
    => Promise<AxiosResponse<T>> {
    return (url: string, data?: any, config?: AxiosRequestConfig) => axiosInstance.put(url, data, config);
  },
});
AxiosStrategies.set('PUT', {
  work<T>(axiosInstance: AxiosInstance): (url: string, data?: any, config?: AxiosRequestConfig)
    => Promise<AxiosResponse<T>> {
    return (url: string, data?: any, config?: AxiosRequestConfig) => axiosInstance.put(url, data, config);
  },
});

export function getStrategy(method: Method): AxiosStrategy {
  const strategy = AxiosStrategies.get(method);
  if (strategy === undefined) {
    // todo: custom error type
    throw new Error('not allowed method');
  }
  return strategy;
}
