<template>
  <div class="date">
      <h4 class="title">{{ title }}</h4>
    <ul class="list">
      <li :key="index" v-for="(item, index) in list">
        <span class="active">{{ index + 1 }}</span>
        <span>{{ item.name }}</span>
        <span>{{ item.total }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'dateList',
  // ['title', 'list']
  props: {
    title: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="stylus" scoped>
  .date {
    padding: 0 32px 32px 72px;
    .list {
      margin: 25px 0 0;
      padding: 0;
      list-style: none;
      li {
        margin-top: 16px;
        span {
          color: rgba(0, 0, 0, .65);
          font-size: 14px;
          line-height: 22px;
          &:first-child {
            background-color: #f5f5f5;
            border-radius: 20px;
            display: inline-block;
            font-size: 12px;
            font-weight: 600;
            margin-right: 24px;
            height: 20px;
            line-height: 20px;
            width: 20px;
            text-align: center;
          }
          &.active {
            background-color: #314659;
            color: #fff;
          }
          &:last-child {
            float: right;
          }
        }
      }
    }
  }

  .mobile .rank {
    padding: 0 32px 32px 32px;
  }
  .title
    color #1890ff
</style>
