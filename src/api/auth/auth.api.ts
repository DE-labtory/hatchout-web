import {Service} from 'typedi';
import {SignInDto} from '@/types';
import {AxiosResponse} from 'axios';
import {AxiosSupplier} from '@/api/axios/axios.supplier';
import {AxiosContext} from '@/api/axios/axios.context';

@Service()
export class AuthApi {
  private domain = 'auth';

  constructor(private axiosContext: AxiosContext) {}

  public async signIn(address: string, message: string, signature: string): Promise<SignInDto> {
    return await this.axiosContext.call<SignInDto>('POST', `${this.domain}/signin`, {
      address,
      message,
      signature,
    });
  }

}
