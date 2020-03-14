import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {instance, mock, when} from 'ts-mockito';
import {AxiosSupplier} from '@/api/axios/axios.supplier';
import {AuthApi} from '@/api/auth/auth.api';
import {HttpClient} from '@/api/axios/http.client';
import {EthereumServiceImpl} from '@/api/wallet/wallet.service.impl';

describe('AuthApi', () => {
  const mockAdapter = new MockAdapter(axios);
  const mockAxiosSupplier = mock(AxiosSupplier);
  when(mockAxiosSupplier.get()).thenReturn(axios.create());

  const httpClient = new HttpClient(instance(mockAxiosSupplier));
  const mockWalletService = mock(EthereumServiceImpl);
  const address = 'testAddress';
  const message = 'testMessage';
  const signature = 'testSignature';
  when(mockWalletService.hasWallet()).thenReturn(true);
  when(mockWalletService.getPublicAddress()).thenReturn(new Promise<string>((resolve) => resolve(address)));
  when(mockWalletService.createSignature(message)).thenReturn(new Promise<string>((resolve) => resolve(signature)));
  const authApi = new AuthApi(httpClient, instance(mockWalletService));
  let responseData: object;
  const domain = 'auth';

  describe('signIn()', () => {
    it('should return signInDto', async () => {
      responseData = {
        id: 1,
        address,
        name: 'testName',
        point: 0,
        level: 0,
        jwt: 'testJwt',
      };
      mockAdapter.onPost(`/${domain}/signin`, {address, message, signature}).reply(200, responseData);
      expect(await authApi.signIn(message)).toEqual(responseData);
    });

    it('should return 404 error', async () => {
      mockAdapter.onPost(`/${domain}/signin`, {address, message, signature}).reply(404);

      await expect(authApi.signIn(message))
        .rejects
        .toThrow(new Error('Request failed with status code 404'));
    });

    it('should return network error', async () => {
      mockAdapter.onPost(`/${domain}/signin`, {address, message, signature}).networkError();

      await expect(authApi.signIn(message))
        .rejects
        .toThrow(new Error('Network Error'));
    });
  });

  describe('signUp()', () => {
    const userName = 'testUserName';

    it('should return signUpDto', async () => {
      responseData = {
        id: 1,
        address,
        name: 'testName',
        point: 0,
        level: 0,
        jwt: 'testJwt',
      };
      mockAdapter.onPost(`/${domain}/signup`, {address, userName, message, signature}).reply(200, responseData);
      expect(await authApi.signUp(userName, message)).toEqual(responseData);
    });

    it('should return 404 error', async () => {
      mockAdapter.onPost(`/${domain}/signup`, {address, userName, message, signature}).reply(404);

      await expect(authApi.signUp(userName, message))
          .rejects
          .toThrow(new Error('Request failed with status code 404'));
    });

    it('should return network error', async () => {
      mockAdapter.onPost(`/${domain}/signup`, {address, userName, message, signature}).networkError();

      await expect(authApi.signUp(userName, message))
          .rejects
          .toThrow(new Error('Network Error'));
    });
  });
});
