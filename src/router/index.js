import Vue from 'vue';
import VueRouter from 'vue-router';
import BinaryConverter from '../components/BinaryConverter.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'BinaryConverter', // Set the name to your component
    component: BinaryConverter,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
