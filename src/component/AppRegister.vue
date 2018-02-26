<template>
  <div>
      <div class="container">
        <label for="email"><b>Email</b></label>
        <input v-model="user.email" type="text" placeholder="Enter Email" name="email" required>
    
        <label for="password"><b>Password</b></label>
        <input v-model="user.password" type="password" placeholder="Enter Password" name="password" required>
    
        <button @click="registerUser">Register</button>
      </div>
  </div> 
</template>

<script>
import {authService} from '../services/auth.service'

export default {
  
  data: function() {
    return {
      user: {
          email: "", 
          password: ""
      }
    };
  },
  methods: {
    registerUser() {
      if(this.user.email != "" && this.user.password != "") {
        authService.registerUser(this.user);
      }
    },
  }
}
</script>