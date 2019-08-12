
import {SignInDto, User} from '@/types';
import {AxiosResponse} from 'axios';
import {Inject, Injectable} from 'vue-typedi';
import {DeleteResultDto} from '@/types/deleteResultDto';
import {AxiosService} from '@/api/axios/axios.service';

@Injectable()
export class UserApi {

  private domain = 'users';

  @Inject()
  private axiosService!: AxiosService;

  public async signIn(): Promise<SignInDto> {
    return {} as SignInDto;
  }
  public async get(id: number): Promise<User> {
    const axiosInstance = this.axiosService.get();
    const response: AxiosResponse<User> = await axiosInstance.get<User>(`${this.domain}/${id}`);
    return response.data;
  }
  public async delete(id: number): Promise<DeleteResultDto> {
    const axiosInstance = this.axiosService.get();
    const response: AxiosResponse<DeleteResultDto> =
      await axiosInstance.delete<DeleteResultDto>(`${this.domain}/${id}`);
    return response.data;
  }
  public async increaseLevel(id: number, amount: number): Promise<User> {
    const axiosInstance = this.axiosService.get();
    const response: AxiosResponse<User> = await axiosInstance.put<User>
    (`${this.domain}/${id}/increase-level`, null, {params: {amount}});
    return response.data;
  }
  public async increasePoint(id: number, amount: number): Promise<User> {
    const axiosInstance = this.axiosService.get();
    const response: AxiosResponse<User> = await axiosInstance.put<User>
    (`${this.domain}/${id}/increase-point`, null, { params: {amount}});
    return response.data;
  }
  public async decreasePoint(id: number, amount: number): Promise<User> {
    const axiosInstance = this.axiosService.get();
    const response: AxiosResponse<User> = await axiosInstance.put<User>
    (`${this.domain}/${id}/decrease-point`, null, { params: {amount}});
    return response.data;
  }

}
