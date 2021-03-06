import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/Main.vue'),
    },
    {
      path: '/collection',
      name: 'collection',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Collection.vue'),
    },
    {
      path: '/txHistory',
      name: 'txHistory',
      component: () => import('../views/TxHistory.vue'),
    },
  ],
});
