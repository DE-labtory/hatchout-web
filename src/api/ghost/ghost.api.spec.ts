import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {instance, mock, when} from 'ts-mockito';
import {AxiosSupplier} from '@/api/axios/axios.supplier';
import {HttpClient} from '@/api/axios/http.client';
import {GhostApi} from '@/api/ghost/ghost.api';
import {Ghost} from '@/types';

describe('GhostApi', () => {
  const mockAdapter = new MockAdapter(axios);
  const mockAxiosSupplier = mock(AxiosSupplier);
  when(mockAxiosSupplier.get()).thenReturn(axios.create());

  const httpClient = new HttpClient(instance(mockAxiosSupplier));
  const ghostApi = new GhostApi(httpClient);
  let responseData: Ghost;
  const domain = 'ghosts';
  describe('getByPage()', () => {
    const page = 1;
    it('should return ghosts', async () => {
      responseData = {
        name: 'Token Name1',
        gene: 'token ID',
        tokenId: 1,
        userAddress: 'user1',
        level: 1,
        angelPoint: 10,
        devilPoint: 20,
        createdDate: Date.now(),
      };
      mockAdapter.onGet(`/${domain}?page=${page}`).reply(200, responseData);

      expect(await ghostApi.getByPage(page)).toEqual(responseData);
    });

    it('should return 404 error', async () => {
      mockAdapter.onGet(`/${domain}?page=${page}`).reply(404);

      await expect(ghostApi.getByPage(page))
          .rejects
          .toThrow(new Error('Request failed with status code 404'));
    });

    it('should return network error', async () => {
      mockAdapter.onGet(`/${domain}?page=${page}`).networkError();

      return expect(ghostApi.getByPage(page))
          .rejects
          .toThrow(new Error('Network Error'));
    });
  });
});
