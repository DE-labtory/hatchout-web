import {Container} from 'inversify';
import {TYPES} from '@/provider/types';
import {AxiosService} from '@/api/axios/axios.service';
import {AxiosFactory} from '@/api/axios/axios.factory';

export const container = new Container();

container.bind<AxiosService>(TYPES.AxiosService).to(AxiosService);
container.bind<AxiosFactory>(TYPES.AxiosFactory).to(AxiosFactory);
