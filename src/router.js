import { createRouter, createWebHistory } from 'vue-router';
import Products from './pages/Products.vue'
import Customers from './pages/Customers.vue'

const routes = [
  {
    path: '/',
    component: Products
  },
  {
    path: '/products',
    component: Products
  },{
    path: '/customers',
    component: Customers
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
