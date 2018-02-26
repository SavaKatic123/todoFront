<template>
  <div>
      <div class="container">
        <label for="name">Email</label>
        <input v-model="user.email" type="text" placeholder="Enter Email" name="email" required>
    
        <label for="password">Password</label>
        <input v-model="user.password" type="password" placeholder="Enter Password" name="password" required>
    
        <button @click="loginUser">Login</button>
        
      </div>
  </div> 
</template>

<script>
import {authService} from '../services/auth.service.js'

export default {
  data() {
    return {
      user: {
          email: "", 
          password: ""
      }
    };
  },
  methods: {
    loginUser() {
      if(this.user.email != "" && this.user.password != "") {
        authService.loginUser(this.user);
      }
    },
  }
}
</script>