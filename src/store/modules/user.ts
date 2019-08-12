
import {Inject, Injectable} from 'vue-typedi';
import {UserApi} from '@/api';

@Injectable()
export class UserModule {

  @Inject()
  private userApi!: UserApi;
}
