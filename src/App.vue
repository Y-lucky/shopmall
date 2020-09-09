<template>
  <div id="app">
    <keep-alive exclude="Detail">
       <router-view/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
import mainTabBar from '../src/components/content/mainTabBar'
  export default {
    name: 'App',
    components: {
      mainTabBar
    }
  }
</script>

<style>
  @import './assets/css/base.css';
</style>
