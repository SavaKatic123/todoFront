import Vue from 'vue'
import App from './App.vue'
import axiosService from './services/axios.service'
import router from './router'
import AppLogin from './component/AppLogin.vue'
import AppDashboard from './component/AppDashboard.vue'
import AppRegister from './component/AppRegister.vue'
import AppHome from './component/AppHome.vue'

/*

*/
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
