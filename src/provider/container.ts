import {Container} from 'inversify';
import {HttpAdapter} from '@/domain/http.adapter';
import {HatchoutAdapter} from '@/infra/adapter/hatchout.adapter';
import {AdapterFactory} from '@/infra/factory/adapter.factory';
import {AxiosFactory} from '@/infra/factory/axios.factory';
import {TYPES} from '@/provider/types';

export const container = new Container();
container.bind<HttpAdapter>(TYPES.HttpAdapter).to(HatchoutAdapter);
container.bind<AdapterFactory>(TYPES.AdapterFactory).to(AxiosFactory);


