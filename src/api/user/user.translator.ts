import {SignDto, User} from '@/types';
import {Service} from 'typedi';

@Service()
export class UserTranslator {
  public translate(signDto: SignDto): User {
    return new User(signDto.id, signDto.address, signDto.name, signDto.point, signDto.level, signDto.jwt);
  }
}
