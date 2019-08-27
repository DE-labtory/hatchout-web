
import {User} from '@/types';
import {AxiosResponse} from 'axios';
import {DeleteResultDto} from '@/types/deleteResultDto';
import {AxiosSupplier} from '@/api/axios/axios.supplier';
import {Inject, Service} from 'typedi';

@Service()
export class UserApi {

  private domain = 'users';

  constructor(private axiosSupplier: AxiosSupplier) {}

  public async get(id: number): Promise<User> {
    const axiosInstance = this.axiosSupplier.get();
    const response: AxiosResponse<User> = await axiosInstance.get<User>(`${this.domain}/${id}`);
    return response.data;
  }
  public async delete(id: number): Promise<DeleteResultDto> {
    const axiosInstance = this.axiosSupplier.get();
    const response: AxiosResponse<DeleteResultDto> =
      await axiosInstance.delete<DeleteResultDto>(`${this.domain}/${id}`);
    return response.data;
  }
  public async increaseLevel(id: number, amount: number): Promise<User> {
    const axiosInstance = this.axiosSupplier.get();
    const response: AxiosResponse<User> = await axiosInstance.put<User>
    (`${this.domain}/${id}/increase-level`, null, {params: {amount}});
    return response.data;
  }
  public async increasePoint(id: number, amount: number): Promise<User> {
    const axiosInstance = this.axiosSupplier.get();
    const response: AxiosResponse<User> = await axiosInstance.put<User>
    (`${this.domain}/${id}/increase-point`, null, { params: {amount}});
    return response.data;
  }
  public async decreasePoint(id: number, amount: number): Promise<User> {
    const axiosInstance = this.axiosSupplier.get();
    const response: AxiosResponse<User> = await axiosInstance.put<User>
    (`${this.domain}/${id}/decrease-point`, null, { params: {amount}});
    return response.data;
  }

}
