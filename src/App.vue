<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <counter :start="101"></counter>
  <indecision></indecision>
</template>

<script>
//import Counter from './components/Counter.vue'
//import HelloWorld from './components/HelloWorld.vue'
import Indecision from './components/indecision.vue'
export default {
  name: 'App',
  components: {
    //Counter,
    Indecision
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
  margin-top: 60px;
}
</style>
