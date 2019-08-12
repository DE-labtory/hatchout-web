import 'reflect-metadata';
import Vue from 'vue';
import App from './App.vue';
import {router} from '@/routes';
import {store} from '@/store';
import VueTypedi from 'vue-typedi';

Vue.use(VueTypedi);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
