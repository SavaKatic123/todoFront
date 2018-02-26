import Vue from 'vue'
import Router from 'vue-router'
import AppLogin from './component/AppLogin.vue'
import AppDashboard from './component/AppDashboard.vue'
import AppRegister from './component/AppRegister.vue'
import AppHome from './component/AppHome.vue'


Vue.use(Router);
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: AppDashboard,
    },
    {
      path: '/register',
      name: 'register',
      component: AppRegister,
    },
    {
      path: '/login',
      name: 'login',
      component: AppLogin,
    },
    {
      path: '/',
      name: 'home',
      component: AppHome,
    }]
});
export default router;