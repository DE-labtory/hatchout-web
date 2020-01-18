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

  public async signIn(userId: string): Promise<User | null> {
    const signInDto = await this.authApi.signIn(userId);
    if (signInDto) { return this.updateSelf(this.userTranslator.translate(signInDto)); }
    return null;
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
