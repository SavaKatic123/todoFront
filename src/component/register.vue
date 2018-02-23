<template>
  <div>
      <div class="container">
        <label for="name"><b>Email</b></label>
        <input v-model="user.password" type="text" placeholder="Enter Email" name="email" required>
    
        <label for="psw"><b>Password</b></label>
        <input v-model="user.email" type="password" placeholder="Enter Password" name="password" required>
    
        <button v-on:click="registerUser">Register</button>
      </div>
  </div> 
</template>

<script>
import router from '../main.js';
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
        //axios.get('').then(response => console.log(response)).catch(error => console.log();
        let user;
        axios.post('http://127.0.0.1/api/users', {
          email: this.user.email,
          password: this.user.password,
        }).then((response) => {
          user = response.data;
          if(user.email == this.user.email) {
            this.$router.push({name: 'login'});
          } else {
            alert('User already exists');
            this.email = "";
            this.password = "";
          }
          });
      }
    },
  }
}
</script>