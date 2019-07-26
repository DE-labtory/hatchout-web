import { injectable } from 'vue-typescript-inject';
import {AxiosInstance} from 'axios';
import {SignInDto} from '@/domain/types';
import {inject} from 'inversify';
import {HttpAdapter} from '@/domain/http.adapter';
import {TYPES} from '@/provider/types';

@injectable()
export class UserApi {

  private httpAdapter: HttpAdapter;

  public constructor(@inject(TYPES.HttpAdapter) httpAdapter: HttpAdapter) {
    this.httpAdapter = httpAdapter;
  }

  public async signIn(): Promise<SignInDto> {
    return {} as SignInDto;
  }
}
