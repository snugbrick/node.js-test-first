<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="genshin" />

    <ol>
      <li>
        {{ site }}
      </li>
    </ol>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Vue from 'vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
const app = {
  data() {
    return {
      site: 1
    }
  }
}

Vue.createApp(app).mount(app)
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