import {User} from '@/types';
import {container} from '@/provider/container';
import {UserApi} from '@/api';
import {TYPES} from '@/provider/types';


export const userModule = {
  namespaced: true,
  state: {
    self: {} as User,
  },
  mutations: {
    syncSelf(state, self) {
      state.self = self;
    },
  },
  actions: {
    async syncSelf({commit}) {
      const userApi = container.get<UserApi>(TYPES.UserApi);
      // todo: fix parameter
      const user = await userApi.get(4);
      commit('syncSelf', user);
    },
  },
  getters: {
    getSelf(state) {
      return state.self;
    },

  },
};
