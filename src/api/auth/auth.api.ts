import {Inject, Injectable} from 'vue-typedi';
import {SignInDto} from '@/types';
import {AxiosResponse} from 'axios';
import {AxiosSupplier} from '@/api/axios/axios.supplier';

@Injectable()
export class AuthApi {
  private domain = 'auth';

  @Inject()
  private axiosSupplier!: AxiosSupplier;

  public async signIn(address: string, message: string, signature: string): Promise<SignInDto> {
    const axiosInstance = this.axiosSupplier.get();
    const response: AxiosResponse<SignInDto> = await axiosInstance.post<SignInDto>(`${this.domain}/signin`, {
      address,
      message,
      signature,
    });

    return response.data;
  }

}
