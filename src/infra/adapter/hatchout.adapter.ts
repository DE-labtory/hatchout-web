import {inject, injectable} from 'inversify';
import 'reflect-metadata';
import {HttpAdapter} from '@/domain/http.adapter';
import {AdapterFactory} from '@/infra/factory/adapter.factory';
import {TYPES} from '@/provider/types';

@injectable()
export class HatchoutAdapter implements HttpAdapter {
  // todo: check if type any is ok or HttpAdapter is better.
  private instance: any;

  constructor(@inject(TYPES.AdapterFactory) adapterFactory: AdapterFactory) {
    // todo: extract address to config file
    this.instance = adapterFactory.create('http://localhost:3000');
  }
  public get<T = any>(url: string): Promise<T> {
    return this.instance.get(url);
  }
}
