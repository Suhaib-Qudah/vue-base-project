import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordRaw,
} from 'vue-router';

const routes: RouteRecordRaw[] = [];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_API_BASE_URL),
  routes: routes,
});

/*
 * This is a global navigation guard.
 * It will be triggered on every route change.
 * You can use it to check if the user is authenticated, for example.
 * If the user is not authenticated, you can redirect them to the login page.
 * If the user is authenticated, you can let them continue to the requested route.
 * You can also use it to check if the user has the necessary permissions to access the requested route.
 * If the user does not have the necessary permissions, you can redirect them to a 403 page.
 */
router.beforeEach(
  async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    console.log('to', to);
    console.log('from', from);
    next();
  }
);

export default router;
