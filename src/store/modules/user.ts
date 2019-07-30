import {User} from '@/types';
import {container} from '@/provider/container';
import {UserApi} from '@/api';
import {TYPES} from '@/provider/types';

const userApi = container.get<UserApi>(TYPES.UserApi);

export const userModule  = {
  state: {
    user: {} as User,
  },
  mutations: {
  },
  actions: {

  },
  getters: {

  },
};
