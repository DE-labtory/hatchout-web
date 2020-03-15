import {Injectable} from 'vue-typedi';
import {Getter, Mutation, State} from 'vuex-simple';
import {User} from '@/types';
import {UserApi} from '@/api/user/user.api';
import {AuthApi} from '@/api/auth/auth.api';
import {UserTranslator} from '@/api/user/user.translator';
import {Inject} from 'typedi';
import Web3 from 'web3';
import {WalletService} from '@/api/wallet/wallet.service';


@Injectable()
export class UserModule {

  @Inject()
  private userApi!: UserApi;
  @Inject()
  private authApi!: AuthApi;
  @Inject()
  private userTranslator!: UserTranslator;
  @Inject()
  private walletService!: WalletService;

  @State()
  private self!: User;

  public async signIn(message: string): Promise<User> {
    try {
      const signDto = await this.authApi.signIn(message);
      return this.updateSelf(this.userTranslator.translate(signDto));
    } catch (e) {
      throw e;
    }
  }

  public async signUp(userName: string, message: string): Promise<User> {
    try {
      const signDto = await this.authApi.signUp(userName, message);
      return this.updateSelf(this.userTranslator.translate(signDto));
    } catch (e) {
      throw e;
    }
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
