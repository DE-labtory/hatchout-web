import { injectable } from 'vue-typescript-inject';
import {SignInDto, User} from '@/types';
import {AxiosInstance, AxiosResponse} from 'axios';
import {DeleteResultDto} from '@/types/dto/DeleteResultDto';

@injectable()
export class UserApi {
  private domain = 'users';
  constructor(private readonly axios: AxiosInstance) {}
  public async signIn(): Promise<SignInDto> {
    return {} as SignInDto;
  }

  public async get(id: number): Promise<User> {
    const response: AxiosResponse<User> = await this.axios.get<User>(this.domain + '/' + id);
    return response.data;
  }
  public async delete(id: number): Promise<DeleteResultDto> {
    const response: AxiosResponse<DeleteResultDto> = await this.axios.delete<DeleteResultDto>(this.domain + '/' + id );
    return response.data;
  }
  public async increaseLevel(id: number, amount: number): Promise<User> {
    const response: AxiosResponse<User> = await this.axios.put<User>
    (this.domain + '/' + id + '/increase-level', null, { params: {amount}});
    return response.data;
  }
  public async increasePoint(id: number, amount: number): Promise<User> {
    const response: AxiosResponse<User> = await this.axios.put<User>
    (this.domain + '/' + id + '/increase-point', null, { params: {amount}});
    return response.data;
  }
  public async decreasePoint(id: number, amount: number): Promise<User> {
    const response: AxiosResponse<User> = await this.axios.put<User>
    (this.domain + '/' + id + '/decrease-point', null, { params: {amount}});
    return response.data;
  }
}
