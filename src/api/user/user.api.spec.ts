import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {instance, mock, when} from 'ts-mockito';
import {UserApi} from '@/api/user/user.api';
import {AxiosSupplier} from '@/api/axios/axios.supplier';
import {HttpClient} from '@/api/axios/http.client';

describe('UserApi', () => {

  const mockAdapter = new MockAdapter(axios);
  const mockAxiosSupplier = mock(AxiosSupplier);
  when(mockAxiosSupplier.get()).thenReturn(axios.create());

  const httpClient = new HttpClient(instance(mockAxiosSupplier));
  const userApi = new UserApi(httpClient);
  let responseData: object;
  const domain = 'users';

  describe('get()', () => {
    const id = 1;
    it('should return user', async () => {
      responseData = {address: 'address', name: 'name', point: 0, level: 0, id: 1};
      mockAdapter.onGet(`/${domain}/${id}`).reply(200, responseData);

      expect(await userApi.get(1)).toEqual(responseData);
    });
    it('should return 404 error', async () => {
      mockAdapter.onGet(`/${domain}/${id}`).reply(404);

      await expect(userApi.get(1))
        .rejects
        .toThrow(new Error('Request failed with status code 404'));
    });
    it('should return network error', async () => {
      mockAdapter.onGet(`/${domain}/${id}`).networkError();

      await expect(userApi.get(1))
        .rejects
        .toThrow(new Error('Network Error'));
    });
  });
  describe('delete()', () => {
    const id = 1;
    it('should return 200 and affected 1', async () => {
      responseData =  { raw:
          { fieldCount: 0,
            affectedRows: 1,
            insertId: 0,
            serverStatus: 2,
            warningCount: 0,
            message: '',
            protocol41: true,
            changedRows: 0 },
        affected: 1 };
      mockAdapter.onDelete(`/${domain}/${id}`).reply(200, responseData);
      expect(await userApi.delete(1)).toEqual(expect.objectContaining({affected: 1}));
    });
    it('should return 200 and affected 0', async () => {
      responseData = { raw:
          { fieldCount: 0,
            affectedRows: 0,
            insertId: 0,
            serverStatus: 2,
            warningCount: 0,
            message: '',
            protocol41: true,
            changedRows: 0 },
        affected: 0 };
      mockAdapter.onDelete(`/${domain}/${id}`).reply(200, responseData);
      expect(await userApi.delete(1)).toEqual(expect.objectContaining({affected: 0}));
    });
  });
  describe('increaseLevel()', () => {
    const id = 1;
    it('should return 200 and increase level', async () => {
      responseData = { address: 'address', name: 'name', point: 0, level: 1, id: 1 };
      mockAdapter.onPut(`/${domain}/${id}/increase-level`).reply(200, responseData);
      expect(await userApi.increaseLevel(1, 1)).toEqual(responseData);
    });

    it('should return 404', async () => {
      mockAdapter.onPut(`/${domain}/${id}/increase-level`).reply(404);
      await expect(userApi.increaseLevel(1, 1))
        .rejects
        .toThrow(new Error('Request failed with status code 404'));
    });

    it('should return network error', async () => {
      mockAdapter.onPut(`/${domain}/${id}/increase-level`).networkError();
      await expect(userApi.increaseLevel(1, 1))
        .rejects
        .toThrow(new Error('Network Error'));
    });

  });
  describe('increasePoint()', () => {
    const id = 1;
    it('should return 200 and increase point', async () => {
      responseData = { address: 'address', name: 'name', point: 1, level: 0, id: 1 };
      mockAdapter.onPut(`/${domain}/${id}/increase-point`).reply(200, responseData);
      expect(await userApi.increasePoint(1, 1)).toEqual(responseData);
    });
    it('should return network error', async () => {
      mockAdapter.onPut(`/${domain}/${id}/increase-point`).networkError();
      await expect(userApi.increasePoint(1, 1))
        .rejects
        .toThrow(new Error('Network Error'));
    });
  });
  describe('decreasePoint()', () => {
    const id = 1;
    it('should decrease point', async () => {
      responseData = { address: 'address', name: 'name', point: 0, level: 0, id: 1 };
      mockAdapter.onPut(`/${domain}/${id}/decrease-point`).reply(200, responseData);
      expect(await userApi.decreasePoint(1, 1)).toEqual(responseData);
    });
    it('should return network error', async () => {
      mockAdapter.onPut(`/${domain}/${id}/decrease-point`).networkError();
      await expect(userApi.decreasePoint(1, 1))
        .rejects
        .toThrow(new Error('Network Error'));
    });
  });
});
