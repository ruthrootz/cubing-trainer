import Vue from 'vue';
import VueRouter from 'vue-router';
import Algorithms from '../views/Algorithms.vue';
import Timer from '../views/Timer.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'timer',
        component: Timer,
    },
    {
        path: '/algorithms',
        name: 'algorithms',
        component: Algorithms,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
