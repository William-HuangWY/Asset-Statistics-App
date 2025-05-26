import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: '/', component: () => import("../view/Home.vue") },
  { path: '/deposit', component: () => import("../view/Deposit.vue") },
  { path: '/stock', component: () => import("../view/Stock.vue") },
  { path: '/transaction', component: () => import("../view/Transaction.vue") },
  { path: '/others', component: () => import("../view/Others.vue") },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
