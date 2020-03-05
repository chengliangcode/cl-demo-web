<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

   <cl-side-bar/>
  </div>
</template>

<script>
import ClSideBar from './components/ClSidebar.vue'

export default {
  name: 'App',
  components: {
    ClSideBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #ccc;
  width: 100%;
  height: 100%;
}
*{
    margin: 0;
    padding: 0;
}
html, body{
    width: 100%;
    height: 100%;
}
</style>
