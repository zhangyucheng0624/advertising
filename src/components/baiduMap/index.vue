<template>
  <baidu-map class="bm-view" ak="pKnQhBZzeWoqgu42xTdycw5X5LPMXamw" :center="center" :zoom="zoom" @ready="handler" scroll-wheel-zoom>
    <bml-heatmap :data="data" :max="100" :radius="20">
    </bml-heatmap>
  </baidu-map>
</template>

<script>
  import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
  import BmlHeatmap from 'vue-baidu-map/components/extra/Heatmap'
  import {reqvehHeatDistr} from '../../api'
  export default {
    name: "BMap",
    data () {
      return {
        center: {lng: 0, lat: 0},
        zoom: 3,
        data: [
          {lng: 114.085947, lat: 22.547, count: 50},
          {lng: 114.085947, lat: 22.547, count: 51},
          {lng: 114.0859, lat: 22.544, count: 15},
          {lng: 114.0859, lat: 22.544, count: 15},
          {lng: 114.0859, lat: 22.544, count: 15},
          {lng: 114.0859, lat: 22.544, count: 15}
        ]
      }
    },
    created () {
      this.getHeatMap();
    },
    methods: {
      handler ({BMap, map}) {
        console.log(BMap, map);
        this.center.lng = 114.085947;
        this.center.lat = 22.547;
        this.zoom = 12
      },
      getHeatMap () {
        reqvehHeatDistr().then(res => {
          res.vehHeatDistr.map( item => {
            console.log(item);
          });
          console.log(res);
        })
      }
    },
    components: {
      BaiduMap,
      BmlHeatmap
    }
  }
</script>

<style scoped lang="stylus">
  .bm-view
    width 100%
    height 400px
</style>
