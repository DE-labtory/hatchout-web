import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {instance, mock, when} from 'ts-mockito';
import {AxiosSupplier} from '@/api/axios/axios.supplier';
import {HttpClient} from '@/api/axios/http.client';
import {GhostApi} from '@/api/ghost/ghost.api';
import {Ghost, GhostDto} from '@/types';

describe('GhostApi', () => {
  const mockAdapter = new MockAdapter(axios);
  const mockAxiosSupplier = mock(AxiosSupplier);
  when(mockAxiosSupplier.get()).thenReturn(axios.create());

  const httpClient = new HttpClient(instance(mockAxiosSupplier));
  const ghostApi = new GhostApi(httpClient);
  let responseData: Ghost;
  const domain = 'ghosts';

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

  describe('getByPage()', () => {
    const page = 1;

    it('should return ghosts', async () => {
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

      await expect(ghostApi.getByPage(page))
          .rejects
          .toThrow(new Error('Network Error'));
    });
  });

  describe('get()', () => {
    const id = 1;

    it('should return ghost', async () => {
      mockAdapter.onGet(`/${domain}/get?id=${id}`).reply(200, responseData);

      expect(await ghostApi.get(id)).toEqual(responseData);
    });

    it('should return 404 error', async () => {
      mockAdapter.onGet(`/${domain}/get?id=${id}`).reply(404);

      await expect(ghostApi.get(id))
          .rejects
          .toThrow(new Error('Request failed with status code 404'));
    });

    it('should return network error', async () => {
      mockAdapter.onGet(`/${domain}/get?id=${id}`).networkError();

      await expect(ghostApi.get(id))
          .rejects
          .toThrow(new Error('Network Error'));
    });
  });

  describe('getByUser()', () => {
    const userAddress = 'user1';

    it('should return ghost', async () => {
      mockAdapter.onGet(`${domain}?userAddress=${userAddress}`).reply(200, responseData);

      expect(await ghostApi.getByUser(userAddress)).toEqual(responseData);
    });

    it('should return 404 error', async () => {
      mockAdapter.onGet(`${domain}?userAddress=${userAddress}`).reply(404);

      await expect(ghostApi.getByUser(userAddress))
          .rejects
          .toThrow(new Error('Request failed with status code 404'));
    });

    it('should return network error', async () => {
      mockAdapter.onGet(`${domain}?userAddress=${userAddress}`).networkError();

      await expect(ghostApi.getByUser(userAddress))
          .rejects
          .toThrow(new Error('Network Error'));
    });
  });

  describe('createEgg()', () => {
    const gene = 'token ID';
    const id = 1;
    const owner = 'user1';
    const ghostDto: GhostDto = {gene, tokenId: id, owner};

    it('should create ghost', async () => {
      mockAdapter.onPost(`${domain}/create-egg`, ghostDto).reply(200, responseData);

      expect(await ghostApi.createEgg(gene, id, owner)).toEqual(responseData);
    });

    it('should return 404 error', async () => {
      mockAdapter.onPost(`${domain}/create-egg`, ghostDto).reply(404);

      await expect(ghostApi.createEgg(gene, id, owner))
          .rejects
          .toThrow(new Error('Request failed with status code 404'));
    });

    it('should return network error', async () => {
      mockAdapter.onPost(`${domain}/create-egg`, ghostDto).networkError();

      await expect(ghostApi.createEgg(gene, id, owner))
          .rejects
          .toThrow(new Error('Network Error'));
    });
  });

  describe('levelUp()', () => {
    const gene = 'token ID';
    const level = 2;

    it ('should level of ghost increase', async () => {
      mockAdapter.onPut(`${domain}/${gene}/level-up`, {gene, level})
          .reply(202, responseData);

      expect(await ghostApi.levelUp(gene, level)).toEqual(responseData);
    });

    it('should return 404 error', async () => {
      mockAdapter.onPut(`${domain}/${gene}/level-up`, {gene, level}).reply(404);

      await expect(ghostApi.levelUp(gene, level))
          .rejects
          .toThrow('Request failed with status code 404');
    });

    it('should return network error', async () => {
      mockAdapter.onPut(`${domain}/${gene}/level-up`, {gene, level}).networkError();

      await expect(ghostApi.levelUp(gene, level))
          .rejects
          .toThrow(new Error('Network Error'));
    });
  });

  describe('transfer()', () => {
    const from = 'user1';
    const to = 'user2';
    const gene = 'token ID';

    it('should transfer ghost', async () => {
      mockAdapter.onPut(`${domain}/${gene}/transfer`, {from, to, gene})
          .reply(202, responseData);

      expect(await ghostApi.transfer(from, to, gene)).toEqual(responseData);
    });

    it('should return 404 error', async () => {
      mockAdapter.onPut(`${domain}/${gene}/transfer`, {from, to, gene}).reply(404);

      await expect(ghostApi.transfer(from, to, gene))
          .rejects
          .toThrow(new Error('Request failed with status code 404'));
    });

    it('should return network error', async () => {
      mockAdapter.onPut(`${domain}/${gene}/transfer`, {from, to, gene}).networkError();

      await expect(ghostApi.transfer(from, to, gene))
          .rejects
          .toThrow(new Error('Network Error'));
    });
  });
});
