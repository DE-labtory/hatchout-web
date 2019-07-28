import {container} from '@/provider/container';
import {AxiosFactory} from '@/api/axios/axios.factory';
import {TYPES} from '@/provider/types';

describe('AxiosFactory', () => {
  describe('dependency resolve', () => {
    it('should be definde', () => {
      const axiosFactory = container.get<AxiosFactory>(TYPES.AxiosFactory);
      expect(axiosFactory).toBeDefined();
    });
  });
});
