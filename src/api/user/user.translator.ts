import {SignInDto, User} from '@/types';
import {Service} from 'typedi';

@Service()
export class UserTranslator {
  public translate(signInDto: SignInDto): User {
    return new User(signInDto.id, signInDto.address, signInDto.name, signInDto.point, signInDto.level, signInDto.jwt);

  }
}
