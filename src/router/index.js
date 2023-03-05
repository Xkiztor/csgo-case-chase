import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DepositView from '../views/DepositView.vue';
import InventoryView from '../views/InventoryView.vue';
import CoinflipView from '../views/CoinflipView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/deposit',
      name: 'deposit',
      component: DepositView,
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: InventoryView,
    },
    {
      path: '/coinflip',
      name: 'coinflip',
      component: CoinflipView,
    },
  ],
});

export default router;
