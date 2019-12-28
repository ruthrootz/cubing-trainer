import Vue from 'vue';
import VueRouter from 'vue-router';
import Algorithms from '../views/Algorithms.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'algorithms',
    component: Algorithms,
  },
  {
    path: '/timer',
    name: 'timer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Timer.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
