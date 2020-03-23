import {Service} from 'typedi';
import {HttpClient} from '@/api/axios/http.client';
import {Ghost, GhostDto} from '@/types';

@Service()
export class GhostApi {
  private domain = 'ghosts';

  constructor(private httpClient: HttpClient) {}

  public async getByPage(page: number): Promise<Ghost[]> {
    return await this.httpClient.call<Ghost[]>('GET', `${this.domain}?page=${page}`);
  }

  public async get(id: number): Promise<Ghost> {
    return await this.httpClient.call<Ghost>('GET', `${this.domain}/get?id=${id}`);
  }

  public async getByUser(userAddress: string): Promise<Ghost[]> {
    return await this.httpClient.call<Ghost[]>('GET', `${this.domain}?userAddress=${userAddress}`);
  }

  public async createEgg(gene: string, id: number, owner: string): Promise<Ghost> {
    const ghostDto: GhostDto = {gene, tokenId: id, owner};
    return await this.httpClient.call<Ghost>('POST', `${this.domain}/create-egg`, ghostDto, {});
  }

  public async levelUp(gene: string, level: number): Promise<Ghost> {
    return await this.httpClient.call<Ghost>('PUT', `${this.domain}/${gene}/level-up`, {gene, level}, {});
  }

  public async transfer(from: string, to: string, gene: string): Promise<Ghost> {
    return await this.httpClient.call<Ghost>('PUT', `${this.domain}/${gene}/transfer`, {from, to, gene}, {});
  }
}
