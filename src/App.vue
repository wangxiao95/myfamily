<template>
  <div id="app">
    <!--<Header></Header>-->
    <!--<Menu></Menu>-->
    <router-view/>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import Header from '@/components/Header'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    Menu,
    Header
  }
}
</script>

<style>

html,body{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
</style>
