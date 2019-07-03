import Vue from 'vue';
import Vuex from 'vuex';
import {Ghost} from '@/types';
import {Item} from '@/types/item';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    myGhosts: [
      {gene: 'token ID', evilPoint: 90, angelPoint: 80, name: 'Token Name', level: 2},
      {gene: 'token ID2', evilPoint: 90, angelPoint: 80, name: 'Token Name2', level: 2},
    ] as Ghost[],
    myItems: [
      {name: 'item 1', price: 100, detail: 'detail 1'},
      {name: 'item 2', price: 200, detail: 'detail 2'},
      {name: 'item 3', price: 300, detail: 'detail 3'},
    ] as Item[],
  },
  mutations: {},
  actions: {},
});
