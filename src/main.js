import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import login from './component/login.vue'
import home from './component/home.vue'
import register from './component/register.vue'


Vue.use(Router);
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'register',
      component: register,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/home',
      name: 'home',
      component: home,
    }]
});
export default router;

/*

*/
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
