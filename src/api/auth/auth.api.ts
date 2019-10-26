import {SignInDto} from '@/types';
import {Service} from 'typedi';
import {HttpClient} from '@/api/axios/http.client';

@Service()
export class AuthApi {
  private domain = 'auth';

  constructor(private httpClient: HttpClient) {}

  public async signIn(address: string, message: string, signature: string): Promise<SignInDto> {
    return await this.httpClient.call<SignInDto>('POST', `${this.domain}/signin`, {
      address,
      message,
      signature,
    });
  }
}
