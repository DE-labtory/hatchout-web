import {SignDto} from '@/types';
import {Inject, Service} from 'typedi';
import {HttpClient} from '@/api/axios/http.client';
import {WalletService} from '@/api/wallet/wallet.service';
import {Injectable} from 'vue-typedi';

@Service()
export class AuthApi {
  private domain = 'auth';

  constructor(private httpClient: HttpClient, private walletService: WalletService) {}

  public async signIn(message: string): Promise<SignDto | null> {
    if (!this.walletService.hasWallet()) { return null; }

    const address = await this.walletService.getPublicAddress();
    const signature = await this.walletService.createSignature(message);

    return await this.httpClient.call<SignDto>('POST', `${this.domain}/signin`, {
      address,
      message,
      signature,
    });
  }

  public async signUp(userName: string, message: string): Promise<SignDto | null> {
    if (!this.walletService.hasWallet()) { return null; }

    const address = await this.walletService.getPublicAddress();
    const signature = await this.walletService.createSignature(message);

    return await this.httpClient.call<SignDto>('POST', `${this.domain}/signup`, {
      address,
      userName,
      message,
      signature,
    });
  }
}
