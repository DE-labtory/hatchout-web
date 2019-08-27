import {SignInDto} from '@/types';
import {AxiosResponse} from 'axios';
import {AxiosSupplier} from '@/api/axios/axios.supplier';
import {Inject, Service} from 'typedi';

@Service()
export class AuthApi {
  private domain = 'auth';

  constructor(private axiosSupplier: AxiosSupplier) {}

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
