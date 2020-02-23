import 'reflect-metadata';
import Vue from 'vue';
import App from './App.vue';
import {router} from '@/routes';
import {store} from '@/store';
import VueTypedi from 'vue-typedi';

Vue.use(VueTypedi);

Vue.config.productionTip = false;

// Vue.component('statichtmlpage', function (resolve, reject) {
//   this.$http.get('', function (data, status, request) {
//     let parser = new DOMParser();
//     let doc: string = parser.parseFromString(data, 'text/html');
//     resolve({
//       template: doc
//     })
//   })
// });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
