<template>
  <div class="logo">
    <img src="../../assets/车顶传媒logo.png" alt="">
    <p>Top media 全国最大的智能户外移动媒体</p>
    <div class="login-title">
      <p ref="toggleText">{{$route.name}}</p>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="stylus">
  .logo
    text-align center
    img
      height 60px
    p
      font-size 14px
      color rgba(0,0,0,.45)
      margin 15px 0 40px 0
  .login-title
    height 30px
    margin 0 auto
    width 100px
    border-bottom 2px solid #1890ff
    margin-bottom 30px
    p
      color #1890ff
      font-size 16px
</style>
