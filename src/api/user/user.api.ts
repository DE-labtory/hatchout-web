
import {User} from '@/types';
import {DeleteResultDto} from '@/types/deleteResultDto';
import {Service} from 'typedi';
import {AxiosContext} from '@/api/axios/axios.context';

const domain = 'users';



@Service()
export class UserApi {

  constructor(private axiosContext: AxiosContext) {}
  public async get(id: number): Promise<User> {
    return await this.axiosContext.call<User>('GET', `${domain}/${id}`);
  }
  public async delete(id: number): Promise<DeleteResultDto> {
    return await this.axiosContext.call<DeleteResultDto>('DELETE', `${domain}/${id}`);
  }
  public async increaseLevel(id: number, amount: number): Promise<User> {
    return await this.axiosContext.call<User>('PUT', `${domain}/${id}/increase-level`, null, {params: {amount}});
  }
  public async increasePoint(id: number, amount: number): Promise<User> {
    return await this.axiosContext.call<User>('PUT', `${domain}/${id}/increase-point`, null, { params: {amount}});
  }
  public async decreasePoint(id: number, amount: number): Promise<User> {
    return await this.axiosContext.call<User>('PUT', `${domain}/${id}/decrease-point`, null, { params: {amount}});
  }
}
