import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Dashboard from '@/components/Dashboard.vue';
import { useAuthStore } from '@/stores/auth';
import i18n from '@/i18n';

const supportedLocales = ['en', 'ar'];

const routes = [
  { path: '/', redirect: '/en' },
  {
    path: '/:locale',
    children: [
      { path: '', component: Home },
      { path: 'about', component: () => import('@/components/About.vue') },
      { path: 'login', component: () => import('@/components/Login.vue') },
      { path: 'dashboard', component: Dashboard, meta: { requiresAuth: true } },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach(async (to) => {
  const locale = to.params.locale;

  // Redirect unsupported locales to /en
  if (locale && !supportedLocales.includes(locale)) {
    return '/en';
  }

  // Set locale and direction
  if (locale && supportedLocales.includes(locale)) {
    i18n.global.locale.value = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = locale;
  }

  const authStore = useAuthStore();
  await authStore.waitForReady();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return `/${locale}/login`;
  }

  if (to.path === `/${locale}/login` && authStore.isAuthenticated) {
    return `/${locale}/dashboard`;
  }
});

export default router;
