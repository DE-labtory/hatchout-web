import Vue from 'vue';
import Vuex from 'vuex';
import {Ghost} from '@/types';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    myGhosts: [
      {gene: '123', evilPoint: 90, angelPoint: 80, name: 'ghost', level: 2},
      {gene: '125', evilPoint: 90, angelPoint: 80, name: 'ghost2', level: 2},
    ] as Ghost[],
  },
  mutations: {},
  actions: {},
});
