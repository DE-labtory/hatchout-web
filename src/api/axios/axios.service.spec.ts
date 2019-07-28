import {container} from '@/provider/container';
import {TYPES} from '@/provider/types';
import {AxiosService} from '@/api/axios/axios.service';

describe('AxiosService', () => {
  describe('dependency resolve', () => {
    it('should be defined', () => {
      const axiosService = container.get<AxiosService>(TYPES.AxiosService);
      expect(axiosService).toBeDefined();
    });
  });
});
