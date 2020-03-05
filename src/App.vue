<template>
  <div id="app">
    <cl-layout/>
  </div>
</template>

<script>
import ClLayout from './components/ClLayout.vue'

export default {
  name: 'App',
  components: {
    ClLayout
  }
}
</script>

<style>
#app {
  font-family: Microsoft YaHei, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #ccc;
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
</style>
