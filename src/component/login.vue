<template>
  <div>
      <div class="container">
        <label for="name"><b>Email</b></label>
        <input v-model="user.password" type="text" placeholder="Enter Email" name="email" required>
    
        <label for="psw"><b>Password</b></label>
        <input v-model="user.email" type="password" placeholder="Enter Password" name="password" required>
    
        <button v-on:click="loginUser">Login</button>
        
      </div>
  </div> 
</template>

<script>
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
    loginUser() {
      if(this.user.email != "" && this.user.password != "") {
        let token;
        axios.post('http://127.0.0.1/api/auth/login', {
          email: this.user.email,
          password: this.user.password,
        }).then((response) => {
          console.log(response.data);
          token = response.data.access_token;
          localStorage.setItem("token", token);
          console.log(token);
          this.$router.push({name: 'home'});
          });
      }
    },
  }
}
</script>