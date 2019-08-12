import Vue from 'vue';
import Vuex from 'vuex';

import { createVuexStore } from 'vuex-simple';
import {Store} from './store';
import {Container} from 'vue-typedi';
import tokens from './tokens';


Vue.use(Vuex);

const instance = new Store();

Container.set(tokens.USER_MODULE, instance.userModule);

export const store = createVuexStore(instance, {
  strict: false,
  modules: {},
  plugins: [],

});

