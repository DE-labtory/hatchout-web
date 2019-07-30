import { injectable } from 'vue-typescript-inject';
import {SignInDto, User} from '@/types';
import {AxiosInstance, AxiosResponse} from 'axios';
import {inject} from 'inversify';
import {TYPES} from '@/provider/types';
import {AxiosService} from '@/api/axios/axios.service';
import {DeleteResultDto} from '@/types/dto/DeleteResultDto';
import {UserApi} from '@/api';

@injectable()
export class UserApiImpl implements UserApi {
  private hatchout: AxiosInstance;
  private domain = 'users';
  constructor(
    @inject(TYPES.AxiosService) axiosService: AxiosService,
  ) {
    this.hatchout = axiosService.getHatchOut();
  }
  public async signIn(): Promise<SignInDto> {
    return {} as SignInDto;
  }

  public async get(id: number): Promise<User> {
    const response: AxiosResponse<User> = await this.hatchout.get<User>(this.domain + '/' + id);
    return response.data;
  }
  public async delete(id: number): Promise<DeleteResultDto> {
    const response: AxiosResponse<DeleteResultDto> =
      await this.hatchout.delete<DeleteResultDto>(this.domain + '/' + id);
    return response.data;
  }
  public async increaseLevel(id: number, amount: number): Promise<User> {
    const response: AxiosResponse<User> = await this.hatchout.put<User>
    (this.domain + '/' + id + '/increase-level', null, { params: {amount}});
    return response.data;
  }
  public async increasePoint(id: number, amount: number): Promise<User> {
    const response: AxiosResponse<User> = await this.hatchout.put<User>
    (this.domain + '/' + id + '/increase-point', null, { params: {amount}});
    return response.data;
  }
  public async decreasePoint(id: number, amount: number): Promise<User> {
    const response: AxiosResponse<User> = await this.hatchout.put<User>
    (this.domain + '/' + id + '/decrease-point', null, { params: {amount}});
    return response.data;
  }


}
