import {Inject, Injectable} from 'vue-typedi';
import {AxiosService} from '@/api/axios/axios.service';
import {SignInDto, User} from '@/types';
import {AxiosResponse} from 'axios';

@Injectable()
export class AuthApi {
  private domain = 'auth';

  @Inject()
  private axiosService!: AxiosService;

  public async signIn(address: string, message: string, signature: string): Promise<SignInDto> {
    const axiosInstance = this.axiosService.get();
    const response: AxiosResponse<SignInDto> = await axiosInstance.post<SignInDto>(`${this.domain}/signin`, {
      address,
      message,
      signature,
    });

    return response.data;
  }

}
