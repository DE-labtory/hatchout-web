
import {User} from '@/types';
import {DeleteResultDto} from '@/types/deleteResultDto';
import {Service} from 'typedi';
import {HttpClient} from '@/api/axios/http.client';




@Service()
export class UserApi {
  private domain = 'users';

  constructor(private httpClient: HttpClient) {}

  public async get(id: number): Promise<User> {
    return await this.httpClient.call<User>('GET', `${this.domain}/${id}`);
  }
  public async delete(id: number): Promise<DeleteResultDto> {
    return await this.httpClient.call<DeleteResultDto>('DELETE', `${this.domain}/${id}`);
  }
  public async increaseLevel(id: number, amount: number): Promise<User> {
    return await this.httpClient.call<User>('PUT', `${this.domain}/${id}/increase-level`, null, {params: {amount}});
  }
  public async increasePoint(id: number, amount: number): Promise<User> {
    return await this.httpClient.call<User>('PUT', `${this.domain}/${id}/increase-point`, null, { params: {amount}});
  }
  public async decreasePoint(id: number, amount: number): Promise<User> {
    return await this.httpClient.call<User>('PUT', `${this.domain}/${id}/decrease-point`, null, { params: {amount}});
  }

}
