<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        isRouterAlive:true,
      }
    },
    provide () {
      return {
        reload:this.reload,
      }
    },
  methods: {
    reload () {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  #app
    width 100%
    height 100%
</style>
