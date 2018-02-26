<template>
    <div>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="">ToDo</a>
          </div>
            <ul class="nav navbar-nav">
              <li><router-link :to="{ name: 'home' }">Home</router-link></li>
              <div v-if="!isUserLogged()" class="nav navbar-nav">
                <li><router-link :to="{ name: 'login'}">Login</router-link></li>
                <li><router-link :to="{ name: 'register'}">Register</router-link></li>
              </div>
              <div class="nav navbar-nav" v-else>
                <li><a @click="logoutUser()" href="/">Logout</a></li>
              </div>
            </ul>
        </div>
      </nav>
      <router-view></router-view>
    </div>
</template>

<script>
import {authService} from './services/auth.service'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    isUserLogged() {
      return authService.isUserLogged();
    },
    logoutUser() {
      authService.logoutUser();
    },
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

form {
    border: 3px solid #f1f1f1;
}

input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
}

button:hover {
    opacity: 0.8;
}

textarea {
    width: 100%;
    display:inline-block;
    border: 1px solid black;
    padding: 16px 20px;
}

table {
  width: 100%;
}

.abc {
  background-color: gray !important;
  color: white !important;
}

</style>
