import Vue from 'vue';
import VueRouter from 'vue-router';
import Algorithms from '../views/Algorithms.vue';
import Timer from '../views/Timer.vue';

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
    component: Timer,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
