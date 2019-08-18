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
  ],
});
