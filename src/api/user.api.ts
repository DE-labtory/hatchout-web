import { injectable } from 'vue-typescript-inject';
import {SignInDto} from '@/types';
import {AxiosInstance} from 'axios';
import {inject} from 'inversify';
import {TYPES} from '@/provider/types';
import {AxiosService} from '@/api/axios/axios.service';

@injectable()
export class UserApi {
  private hatchout: AxiosInstance;
  constructor(
    @inject(TYPES.AxiosService) axiosContainer: AxiosService,
  ) {
    this.hatchout = axiosContainer.getHatchOut();
  }
  public async signIn(): Promise<SignInDto> {
    return {} as SignInDto;
  }
}
