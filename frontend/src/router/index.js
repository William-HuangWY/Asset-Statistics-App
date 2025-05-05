import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: '/', component: () => import("../view/Home.vue") },
//   { path: '/...', component: () => import("../views/Other.vue") },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
