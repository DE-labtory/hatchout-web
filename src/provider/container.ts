import {Container} from 'inversify';
import {TYPES} from '@/provider/types';
import {AxiosService} from '@/api/axios/axios.service';
import {AxiosFactory} from '@/api/axios/axios.factory';
import {UserApi} from '@/api';
import {UserApiImpl} from '@/api/user/user.api.impl';

export const container = new Container();

container.bind<AxiosService>(TYPES.AxiosService).to(AxiosService);
container.bind<AxiosFactory>(TYPES.AxiosFactory).to(AxiosFactory);
container.bind<UserApi>(TYPES.UserApi).to(UserApiImpl);
