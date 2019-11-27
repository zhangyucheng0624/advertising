<template>
  <div class='globalFooter'>
    <div class="links">
      <a :href='items.href' v-for="(items,index) in links" :key="index">{{items.title}}</a>
    </div>
    <div class="copyright">
      Copyright @ 2018 Top Media出品
    </div>
  </div>
</template>

<script>
  export default {
    name: "foot",
    data () {
      return {
        links :[
          {
            key: 'help',
            title: '帮助',
            href: '',
          },
          {
            key: 'remark',
            title: '粤ICP备18096180号',
            href: 'http://www.miitbeian.gov.cn/',
          },
          {
            key: 'terms',
            title: '条款',
            href: '',
          },
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">
  .globalFooter
    padding 0 16px
    margin 12px 0 12px 0
    text-align center
    font-size 14px
    .links
      margin-bottom 8px
      a
        color #ccc
        transition all 0.3s
        &:not(last-child)
          margin-right 40px
        &:hover
          color #777
    .copyright
      color #ccc
      font-size 16px
</style>
