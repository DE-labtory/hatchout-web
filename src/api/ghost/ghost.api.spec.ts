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
    it('should return ghosts',  async () => {
      responseData = {name: 'name', address: 'address', point: 1, level: 1};
      mockAdapter.onGet(`/${domain}?page=${page}`).reply(200, responseData);

      expect(await ghostApi.getByPage(page)).toEqual(responseData);
    });
  });
});
