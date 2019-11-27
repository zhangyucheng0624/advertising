<template>
  <div class="accountInfo-wrap">
    <header class="accountInfo-header">
      <h2>账户充值</h2>
      <div class="accountInfo-header-content">
        <ul class="accountInfo-header-list">
          <li>
            <span>账 号：5000</span>
          </li>
          <li>
            <span>账户余额(元)：￥5000</span>
          </li>
          <li>
            <span>充值金额(元)：</span>
            <a-input-number
              :defaultValue="500"
              step="100"
              :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
              :parser="value => value.replace(/\$\s?|(,*)/g, '')"
              @change="onChange"
            />
          </li>
          <li>
            <a-button type="primary">确认充值</a-button>
          </li>
        </ul>
      </div>
    </header>
    <footer class="accountInfo-footer">
      <h2>订单查询</h2>
      <div class="accountInfo-footer-content">
        <div>
          <a-range-picker @change="timeChange" />
          <a-button type="primary" style="margin: 0 10px 0 20px" @click="() => isShowTable = true">查询</a-button>
          <a-button type="primary">导出</a-button>
        </div>
        <div class="accountInfo-footer-table" v-show="isShowTable">
          <p>当前查询记录共4条，消费总金额为3500元</p>
          <a-table :columns="columns" :dataSource="data">
            <template slot="operation" slot-scope="text,record">
              <a-button type="primary" slot="operation">立即支付</a-button>
            </template>
          </a-table>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
  import {reqAccountDet} from '../../api'
  const columns = [
    { title: '订单号', dataIndex: 'name', key: 'name' },
    { title: '充值时间', dataIndex: 'age', key: 'age' },
    { title: '充值金额', dataIndex: 'address', key: 'address' },
    { title: '订单状态', dataIndex: 'status', key: 'status'},
    { title: '充值方式', dataIndex: 'manner', key: 'manner'},
    { title: '交易操作', dataIndex: 'operation', key: 'operation', scopedSlots: { customRender: 'operation' },},
  ];
  const data = [
    {
      key: 1,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      status: 'My name is John Brown',
      manner: 'My name is John Brown',
    }
  ];
  export default {
    name: "accountInfo",
    data () {
      return {
        data,
        columns,
        isShowTable: false
      }
    },
    created() {
      // this.accountInfo()
    },
    methods: {
      onChange(value) {
        console.log(value);
      },
      timeChange(date, dateString) {
        console.log(date, dateString);
      },
      // accountInfo () {
      //   const result = reqAccountDet();
      //   console.log(result);
      // }
    }
  }
</script>

<style scoped lang="stylus">
  .accountInfo-wrap
    width 100%
    height 100%
    padding 20px
    background-color #fff
    .accountInfo-header
      width 100%
      height 260px
      border-bottom 1px solid
      .accountInfo-header-content
        width 100%
        padding 10px
        .accountInfo-header-list
          list-style none
          font-size 20px
          font-weight bold
          li
            margin-bottom 10px
    .accountInfo-footer
      width 100%
      .accountInfo-footer-content
        width 100%
        padding 10px
        .accountInfo-footer-table
          width 100%
          p
            margin-top 20px
            font-size 18px
            font-weight bold
</style>
