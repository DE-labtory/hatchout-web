import {User} from '@/types';
import {DeleteResultDto} from '@/types/dto/DeleteResultDto';

export interface UserApi {
  get(id: number): Promise<User>;
  delete(id: number): Promise<DeleteResultDto>;
  increaseLevel(id: number, amount: number): Promise<User>;
  increasePoint(id: number, amount: number): Promise<User>;
  decreasePoint(id: number, amount: number): Promise<User>;
}
