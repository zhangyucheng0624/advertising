<template>
  <div class="billing-wrap">
    <header class="billing-header">
      <a-range-picker @change="onChange" />
      <a-button type="primary" style="margin: 0 20px">查询</a-button>
      <a-button type="primary">导出</a-button>
    </header>
    <div class="billing-content">
      <div class="billing-content-title">
        <p>当前查询记录4条，消费金额￥3500</p>
      </div>
      <div class="billing-content-table">
        <a-table :columns="columns" :dataSource="data" bordered>
          <template slot="consumeDetail" slot-scope="text,record">
            <a-button type="primary" slot="consumeDetail" @click="() => $router.push('/home/billing/billingDetail')">详情</a-button>
          </template>
        </a-table>
      </div>
    </div>
  </div>
</template>

<script>
  const columns = [
    { title: '日期', dataIndex: 'date', key: 'date' },
    { title: '素材ID', dataIndex: 'ID', key: 'ID' },
    { title: '消费金额', dataIndex: 'consume', key: 'consume' },
    { title: '消费详情', dataIndex: 'consumeDetail', key: 'consumeDetail', scopedSlots: { customRender: 'consumeDetail' },},
  ];
  const data = [
    {
      key: 1,
      date: 'John Brown',
      ID: 32,
      consume: 'New York No. 1 Lake Park',
    }
  ];
  export default {
    name: "billing",
    data () {
      return {
        columns,
        data
      }
    },
    methods: {
      onChange () {

      }
    }
  }
</script>

<style scoped lang="stylus">
  .billing-wrap
    width 100%
    height 100%
    background-color #ffffff
    padding 20px
    .billing-content
      margin-top  50px
      p
        font-size 25px
        color #000
</style>
