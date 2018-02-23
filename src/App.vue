<template>
    <div>
    <router-view></router-view>
    </div>
</template>

<script>
import register from './component/register.vue'
import home from './component/home.vue'
import login from './component/login.vue'
export default {
  name: 'app',
  components: {
    home,
    register,
    login,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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

#little-buttons {
  width: 20% !important;
  margin-right: 10px !important;
  margin-left: 10px !important;
  margin-top: 10px !important;
  padding: 5px, 5px !important;
  display: flex;
  float: left;
}

#selected-box {
  width: 10%;
  margin-top: 15px;  
}
.doneToggle {
  color: aqua;
}

.high {
  background-color: #FFA07A;
}

</style>
