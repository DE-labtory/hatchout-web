import {container} from '@/provider/container';
import {AdapterFactory} from '@/infra/factory/adapter.factory';
import {TYPES} from '@/provider/types';

describe('AdaptreFactory', () => {
  describe('dependency resolve', () => {
    it('should be defined', () => {
      const adapterFactory = container.get<AdapterFactory>(TYPES.AdapterFactory);
      expect(adapterFactory).toBeDefined();
    });
  });
});
