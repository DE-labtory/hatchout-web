import {container} from '@/provider/container';
import {HttpAdapter} from '@/domain/http.adapter';
import {TYPES} from '@/provider/types';

describe('HttpAdapter', () => {
  describe('dependency resolve', () => {
    it('should be defined', () => {
      const httpAdapter = container.get<HttpAdapter>(TYPES.HttpAdapter);
      expect(httpAdapter).toBeDefined();
    });
  });
});
