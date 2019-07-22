import {UserApi} from '@/api/user.api';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {Response} from '@/routes/interceptors/response';


describe('test', () => {
  const mockAdapter = new MockAdapter(axios);
  const instance = axios.create({
    baseURL: 'http://localhost:3000/',
  });
  instance.interceptors.response.use((response) => {
      return response;
    },
    (error) => {
      return Response.handleError(error);
    },
  );
  const userApi = new UserApi(instance);
  let responseData;

  describe('get()', () => {
    it('should return user', async () => {
      responseData = {address: 'address', name: 'name', point: 0, level: 0, id: 1};
      mockAdapter.onGet('/users/1').reply(200, responseData);

      expect(await userApi.get(1)).toEqual(responseData);
    });
    it('should return 404 error', async () => {
      mockAdapter.onGet('/users/1').reply(404);

      await expect(userApi.get(1))
        .rejects
        .toThrow(new Error('Request failed with status code 404'));
    });
    it('should return network error', async () => {
      mockAdapter.onGet('/users/1').networkError();

      await expect(userApi.get(1))
        .rejects
        .toThrow(new Error('Network Error'));
    });
  });
  describe('delete()', () => {
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
      mockAdapter.onDelete('/users/1').reply(200, responseData);
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
      mockAdapter.onDelete('/users/1').reply(200, responseData);
      expect(await userApi.delete(1)).toEqual(expect.objectContaining({affected: 0}));
    });
  });
  describe('increaseLevel()', () => {
    it('should return 200 and increase level', async () => {
      responseData = { address: 'address', name: 'name', point: 0, level: 1, id: 1 };
      mockAdapter.onPut('/users/1/increase-level').reply(200, responseData);
      expect(await userApi.increaseLevel(1, 1)).toEqual(responseData);
    });

    it('should return 404', async () => {
      mockAdapter.onPut('/users/1/increase-level').reply(404);
      await expect(userApi.increaseLevel(1, 1))
        .rejects
        .toThrow(new Error('Request failed with status code 404'));
    });

    it('should return network error', async () => {
      mockAdapter.onPut('/users/1/increase-level').networkError();
      await expect(userApi.increaseLevel(1, 1))
        .rejects
        .toThrow(new Error('Network Error'));
    });

  });
  describe('increasePoint()', () => {
    it('should return 200 and increase point', async () => {
      responseData = { address: 'address', name: 'name', point: 1, level: 0, id: 1 };
      mockAdapter.onPut('/users/1/increase-point').reply(200, responseData);
      expect(await userApi.increasePoint(1, 1)).toEqual(responseData);
    });
    it('should return network error', async () => {
      mockAdapter.onPut('/users/1/increase-point').networkError();
      await expect(userApi.increasePoint(1, 1))
        .rejects
        .toThrow(new Error('Network Error'));
    });
  });
  describe('decreasePoint()', () => {
    it('should decrease point', async () => {
      responseData = { address: 'address', name: 'name', point: 0, level: 0, id: 1 };
      mockAdapter.onPut('/users/1/decrease-point').reply(200, responseData);
      expect(await userApi.decreasePoint(1, 1)).toEqual(responseData);
    });
    it('should return network error', async () => {
      mockAdapter.onPut('/users/1/decrease-point').networkError();
      await expect(userApi.decreasePoint(1, 1))
        .rejects
        .toThrow(new Error('Network Error'));
    });
  });
});


