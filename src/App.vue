<template>
  <v-app id="app">

      <div style="font-size: 20px; font-weight: 400;">愿者上钩</div>
      <div style="color: #888; font-size: 14px;" class="pt-2">多学学，别人怎么就能提那么多问题呢</div>
      <v-spacer></v-spacer>


      <v-content class="pa-5">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </v-content>
    
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import WelfareItem from './components/WelfareItem.vue'

export default {
  name: 'app',
  components: {
    // WelfareItem
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

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
