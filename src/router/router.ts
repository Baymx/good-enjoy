import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    },
    {
      path: '/applyTrial',
      name: 'applyTrial',
      component: () => import(/* webpackChunkName: "applyTrial" */ '../views/Trial/applyTrial.vue'),
    },
    {
      path: '/details',
      name: 'details',
      component: () => import(/* webpackChunkName: "details" */ '../views/Details/details.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '../views/Login/accountLogin.vue'),
    },
    {
      path: '/registerStpe1',
      name: 'registerStpe1',
      component: () => import(/* webpackChunkName: "registerStpe1" */ '../views/Register/registerStpe1.vue'),
    },
    {
      path: '/registerStpe2',
      name: 'registerStpe2',
      component: () => import(/* webpackChunkName: "registerStpe2" */ '../views/Register/registerStpe2.vue'),
    },
  ],
});
