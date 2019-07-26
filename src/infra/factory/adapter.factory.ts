import {HttpAdapter} from '@/domain/http.adapter';


export interface AdapterFactory {
  create(baseUrl: string): HttpAdapter;
}
