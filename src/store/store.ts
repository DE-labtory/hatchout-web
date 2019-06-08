import Vue from 'vue';
import Vuex from 'vuex';
import {Ghost} from '@/types';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    myGhosts: [
      {gene: 'token ID', evilPoint: 90, angelPoint: 80, name: 'Token Name', level: 2},
      {gene: 'token ID2', evilPoint: 90, angelPoint: 80, name: 'Token Name2', level: 2},
    ] as Ghost[],
  },
  mutations: {},
  actions: {},
});
