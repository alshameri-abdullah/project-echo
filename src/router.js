import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Dashboard from '@/components/Dashboard.vue';
import { useAuthStore } from '@/stores/auth';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: () => import('@/components/About.vue') },
  { path: '/login', component: () => import('@/components/Login.vue') },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach(async (to) => {
  const authStore = useAuthStore();
  await authStore.waitForReady();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return '/login';
  }

  if (to.path === '/login' && authStore.isAuthenticated) {
    return '/dashboard';
  }
});

export default router;
