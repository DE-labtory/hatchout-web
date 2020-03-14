import Vue from 'vue';
import Vuex from 'vuex';

import {createVuexStore} from 'vuex-simple';
import {Store} from './store';
import {Container} from 'vue-typedi';
import tokens from './tokens';


Vue.use(Vuex);

const instance = new Store();

Container.set(tokens.USER_MODULE, instance.userModule);
Container.set(tokens.GHOST_MODULE, instance.ghostModule);

export const store = createVuexStore(instance, {
  strict: false,
  modules: {},
  plugins: [],

});

// todo: move to config
const initPage: number = 1;
// todo: handle error correctly
instance.ghostModule.loadGhostsByPage(initPage).then().catch();

