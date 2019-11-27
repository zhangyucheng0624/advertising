<template>
  <div class="detail-wrap">
<!--    <header class="detail-header">-->
<!--      <a-range-picker @change="onChange" />-->
<!--      <a-select defaultValue="lucy" style="width: 120px;margin-left: 10px;">-->
<!--        <a-select-option value="jack">上海</a-select-option>-->
<!--        <a-select-option value="lucy">深圳</a-select-option>-->
<!--        <a-select-option value="Yiminghe">北京</a-select-option>-->
<!--      </a-select>-->
<!--      <ul class="detail-header-list">-->
<!--        <li>-->
<!--          <span>-->
<!--            展示总次数：{{playStatsInfos.totalPlayCount}}-->
<!--          </span>-->
<!--        </li>-->
<!--        <li>-->
<!--          <span>-->
<!--            我的展示次数：{{playStatsInfos.myPlayCount}}-->
<!--          </span>-->
<!--        </li>-->
<!--        <li>-->
<!--          <span>-->
<!--            投放总行程：{{playStatsInfos.totalTrip}}/千米-->
<!--          </span>-->
<!--        </li>-->
<!--        <li>-->
<!--          <span>-->
<!--            总曝光时长：{{playStatsInfos.totalExpoTime}}/分钟-->
<!--          </span>-->
<!--        </li>-->
<!--        <li>-->
<!--          <span>-->
<!--            总曝光人次数：{{playStatsInfos.totalExpoPersonTime}}-->
<!--          </span>-->
<!--        </li>-->
<!--        <li>-->
<!--          <span>-->
<!--            覆盖人数：{{playStatsInfos.coveredPeopleNum}}-->
<!--          </span>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </header>-->
    <div style="padding: 20px;" class="detail-header">
      <a-row :gutter="16">
        <a-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
          <a-card title="展示总次数" :bordered="false" hoverable style="background-color: rgb(25,180,151);border-radius: 20px" :headStyle="{color: '#fff'}">
            <p>{{playStatsInfos.totalPlayCount}}</p>
          </a-card>
        </a-col>
        <a-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
          <a-card title="我的展示次数" :bordered="false" hoverable style="background-color: rgb(53,152,219);border-radius: 20px" :headStyle="{color: '#fff'}">
            <p>{{playStatsInfos.myPlayCount}}</p>
          </a-card>
        </a-col>
        <a-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
          <a-card title="投放总行程" :bordered="false" hoverable style="background-color: rgb(233,76,59);border-radius: 20px" :headStyle="{color: '#fff'}">
            <p>{{playStatsInfos.totalTrip}} /km</p>
          </a-card>
        </a-col>
        <a-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
          <a-card title="总曝光时长" :bordered="false" hoverable style="background-color: rgb(126,196,35);border-radius: 20px" :headStyle="{color: '#fff'}">
            <p>{{playStatsInfos.totalExpoTime}} /min</p>
          </a-card>
        </a-col>
        <a-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
          <a-card title="总曝光人次数" :bordered="false" hoverable style="background-color: rgb(72,209,228);border-radius: 20px" :headStyle="{color: '#fff'}">
            <p>{{playStatsInfos.totalExpoPersonTime}}</p>
          </a-card>
        </a-col>
        <a-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
          <a-card title="覆盖人数" :bordered="false" hoverable style="background-color: rgb(97,210,254);border-radius: 20px" :headStyle="{color: '#fff'}">
            <p>{{playStatsInfos.coveredPeopleNum}}</p>
          </a-card>
        </a-col>
      </a-row>
    </div>
    <div style="padding: 20px;" class="detail-content">
      <a-row :gutter="16">
        <a-col :span="24">
          <a-card style="width:100%">
            <a-tabs defaultActiveKey="1" @change="callback">
              <div class="extra-wrapper" slot="tabBarExtraContent">
                <a-range-picker :style="{width: '256px'}" />
                <a-select defaultValue="1" style="width: 120px;margin-left: 10px;">-->
                  <a-select-option value="0">上海</a-select-option>
                  <a-select-option value="1">深圳</a-select-option>
                  <a-select-option value="2">北京</a-select-option>
                </a-select>
              </div>
              <a-tab-pane tab="展示次数" key="1">
                <a-row>
                  <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                    <div ref="mainBar" class="detail-mainBar"></div>
                  </a-col>
                  <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                    <dateList title="时间对应表" :list="dateLists"/>
                  </a-col>
                </a-row>
              </a-tab-pane>
              <a-tab-pane tab="区域占比" key="2" forceRender>
                <a-row>
                  <a-col :xl="24" :lg="24" :md="24" :sm="24" :xs="24">
                    <div ref="areaBar" class="detail-areaBar"></div>
                  </a-col>
                </a-row>
              </a-tab-pane>
              <a-tab-pane tab="车辆热力图" key="3" forceRender>
                <a-row>
                  <a-col :xl="24" :lg="24" :md="24" :sm="24" :xs="24">
                    <BaiDuMap></BaiDuMap>
                  </a-col>
                </a-row>
              </a-tab-pane>
            </a-tabs>
          </a-card>
        </a-col>
      </a-row>
    </div>
<!--    <div class="detail-content">-->
<!--      <div class="detail-table">-->
<!--        <span>屏幕总数：{{vehicle.totalScrCount}}</span>-->
<!--        <span>车辆总数：{{vehicle.totalVehCount}}</span>-->
<!--        <div class="wrapper" ref="wrapPer">-->
<!--          <ul class="detail-table-list">-->
<!--            <li v-for="(items,index) in vehStatistics" :key="index">-->
<!--              {{items.vehLicplate}}-->
<!--            </li>-->
<!--          </ul>-->
<!--      </div>-->
<!--    </div>-->
<!--      <div ref="mainBar" class="detail-mainBar"></div>-->
<!--      <div ref="areaBar" class="detail-areaBar"></div>-->
<!--      <div ref="heatMap" class="detail-heatMap"></div>-->
<!--    </div>-->
  </div>
</template>

<script>
  import {reqVehStatistics,reqPlayStatsInfo,reqDistVehPercents} from '../../api';
  import dateList from '../../components/dateList/dateList'
  import BScroll from 'better-scroll'
  import BaiDuMap from '../../components/baiduMap'
  let echarts = require('echarts/lib/echarts');
  require('echarts/lib/chart/bar');
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');
  require('echarts/map/js/province/guangdong');
  require('echarts/lib/chart/heatmap');
  const dateLists = [];
  dateLists.push({
    name: '清晨',
    total: '05:01 - 06:59'
  },{
      name: '早上',
      total: '07:00 - 08:59'
    },
    {
      name: '上午',
      total: '09:00 - 12:00'
    },
    {
      name: '中午',
      total: '12:01 - 13:59'
    },
    {
      name: '下午',
      total: '14:00 - 17:59'
    },{
      name: '傍晚',
      total: '18:00 - 18:59'
    },
    {
      name: '晚上',
      total: '19:00 - 23:59'
    },
    {
      name: '凌晨',
      total: '24::00 - 05:00'
    }
  );
  const data = [
    { year: '1951 年', sales: 38 },
    { year: '1952 年', sales: 52 },
    { year: '1956 年', sales: 61 },
    { year: '1957 年', sales: 145 },
    { year: '1958 年', sales: 48 },
    { year: '1959 年', sales: 38 },
    { year: '1960 年', sales: 38 },
    { year: '1962 年', sales: 38 },
  ];
  const scale = [{
    dataKey: '已展示',
    tickInterval: 20,
  }];
  export default {
    name: "detail",
    data () {
      return {
        echarts,
        vehicle:{},
        vehStatistics: [],
        playStatsInfos: {},
        timeName: [],
        playCounts: [],
        distVehPercents: [],
        distName: [],
        vehPercent: [],
        dateLists,
        data,
        scale,
        barData: [],
        padding:[ 0, 30, 60, 30 ],
        height: 400,
        start:[ 'min', 'max' ],
        end:[ 'max', 'min' ],
        color:['tmp', '#F51D27-#FA541C-#FF8C12-#FFC838-#FAFFA8-#80FF73-#12CCCC-#1890FF-#6E32C2']
      }
    },
    mounted () {
      console.log(this);
      this.VehStatistic();
      this.$nextTick(() => {
        this.areaBar();
        this.playInfo();
        this.scroll = new BScroll(this.$refs.wrapPer, {
          scrollY:true,
          mouseWheel: true,
          bounce: {
            top: true,
            bottom: true,
            left: true,
            right: true
          }
        })
      });
    },
    methods: {
      onChange(date, dateString) {
        console.log(date, dateString);
      },
      async areaBar () {
        const result = await reqDistVehPercents();
        if (result) {
          this.distVehPercents = result.distVehPercents;
          this.distVehPercents.map((item) => {
            this.distName.push(item.distName);
            this.vehPercent.push(item.vehPercent)
          })
        }
        console.log(this.distVehPercents);
        let myChart = this.echarts.init(this.$refs.areaBar);
        myChart.setOption({
          color: ['#7B68EE'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: 'category',
            data: this.distName
          },
          series: [
            {
              name: '车辆占比',
              type: 'bar',
              data: this.vehPercent
            }
          ]
        })
      },
      async VehStatistic () {
        const result = await reqVehStatistics();
        if (result) {
          this.vehicle = result;
          this.vehStatistics = this.vehicle.vehStatistics
        }
        console.log(result);
      },
      async playInfo () {
        const result = await reqPlayStatsInfo();
        if (result) {
          this.playStatsInfos = result;
          this.playStatsInfos.playStatsInfo.map((item) => {
            this.timeName.push(item.timeSlotName);
            this.playCounts.push(item.playCount)
          });
          console.log(this.timeName[1]);
          console.log(this.playCounts);
          let myChart = this.echarts.init(this.$refs.mainBar);
          myChart.setOption({
            color: ['#7B68EE'],
            tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis : [
              {
                type : 'category',
                data : this.timeName,
                axisTick: {
                  alignWithLabel: true
                }
              }
            ],
            yAxis : [
              {
                type : 'value'
              }
            ],
            series : [
              {
                name:'已展示',
                type:'bar',
                barWidth: '60%',
                data:this.playCounts
              }
            ]
          })
        }
      },
      callback(key) {
        console.log(key);
      },
    },
    components: {
      dateList,
      BaiDuMap
    }
  }
</script>

<style scoped lang="stylus">
  .detail-wrap
    width 100%
    height 100%
    .detail-header
      width 100%
      p
        font-size 18px
        color #fff
      .detail-header-list
        width 55%
        height 100%
        margin-bottom 0
        list-style none
        float right
        display flex
        padding-left 0
        flex-wrap wrap
        li
          width 30%
          span
            font-size 18px
    .detail-content
      width 100%
      position relative
      .detail-table
        display inline-block
        width 20%
        border 1px solid #1890ff
        span
          font-size 18px
          display inline-block
          width 50%
          height 30px
          text-align center
          border-bottom 1px solid #1890ff
        .wrapper
          width 100%
          height 600px
          overflow hidden
          .detail-table-list
            list-style none
            width 100%
            padding-left 0
            display flex
            flex-wrap wrap
            li
              width 33.3%
              border-right 1px solid #1890ff
              border-bottom 1px solid #1890ff
              text-align center
              font-size 18px
      .detail-mainBar
        height 400px
      .detail-areaBar
        width 60%
        height 400px
      .detail-heatMap
        width 60%
        height 400px
    .extra-wrapper
      line-height 25px
      padding-right 24px
</style>
