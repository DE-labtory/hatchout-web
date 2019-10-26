import {AxiosInstance, AxiosRequestConfig, AxiosResponse, Method} from 'axios';

export type AxiosMethod = <T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig)
  => Promise<R>;

type PreparedMethod = (axiosInstance: AxiosInstance) => AxiosMethod;

const PreparedMethods = new Map<Method, PreparedMethod>();

PreparedMethods.set('GET', (axiosInstance: AxiosInstance) => axiosInstance.get);
PreparedMethods.set('get', (axiosInstance: AxiosInstance) => axiosInstance.get);
PreparedMethods.set('POST', (axiosInstance: AxiosInstance) => axiosInstance.post);
PreparedMethods.set('post', (axiosInstance: AxiosInstance) => axiosInstance.post);
PreparedMethods.set('DELETE', (axiosInstance: AxiosInstance) => axiosInstance.delete);
PreparedMethods.set('delete', (axiosInstance: AxiosInstance) => axiosInstance.delete);
PreparedMethods.set('PUT', (axiosInstance: AxiosInstance) => axiosInstance.put);
PreparedMethods.set('put', (axiosInstance: AxiosInstance) => axiosInstance.put);

export function getMethod(methodName: Method, axiosInstance: AxiosInstance): AxiosMethod {
  const preparedMethod: PreparedMethod | undefined = PreparedMethods.get(methodName);
  if (preparedMethod === undefined) {
    throw Error('not allowed methodName');
  }
  return preparedMethod(axiosInstance);
}
