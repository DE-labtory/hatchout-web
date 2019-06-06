import 'reflect-metadata';
import Vue from 'vue';
import App from './App.vue';
import {router} from '@/routes';
import {store} from '@/store';
import {Container} from '@fluffy-spoon/inverse';
import {VueInverse} from '@fluffy-spoon/inverse-vue';

const container = new Container();
Vue.use(VueInverse, container);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
