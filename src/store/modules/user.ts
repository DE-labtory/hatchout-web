
import {Inject, Injectable} from 'vue-typedi';
import {Getter, Mutation, State} from 'vuex-simple';
import {User} from '@/types';
import {UserApi} from '@/api/user/user.api';
import {AuthApi} from '@/api/auth/auth.api';
import {UserTranslator} from '@/api/user/user.translator';


@Injectable()
export class UserModule {

  @Inject()
  private userApi!: UserApi;
  @Inject()
  private authApi!: AuthApi;
  @Inject()
  private userTranslator!: UserTranslator;

  @State()
  private self!: User;

  public async signIn(address: string, message: string, signature: string): Promise<User> {
    const signInDto = await this.authApi.signIn(address, message, signature);
    return this.updateSelf(this.userTranslator.translate(signInDto));
  }

  @Getter()
  public get getSelf(): User {
    return this.self;
  }

  @Mutation()
  private updateSelf(self: User): User {
    this.self = self;
    return this.self;
  }
}
