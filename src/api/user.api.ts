import { injectable } from 'vue-typescript-inject';
import {SignInDto} from '@/types';
import {AxiosInstance} from 'axios';

@injectable()
export class UserApi {
  constructor(private readonly axios: AxiosInstance) {}
  async signIn(): Promise<SignInDto> {
    return {} as SignInDto;
  }
}
