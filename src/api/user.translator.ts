import {Injectable} from 'vue-typedi';
import {SignInDto, User} from '@/types';

@Injectable()
export class UserTranslator {
  public translate(signInDto: SignInDto): User {
    return new User(signInDto.id, signInDto.address, signInDto.name, signInDto.point, signInDto.level, signInDto.jwt);

  }
}
