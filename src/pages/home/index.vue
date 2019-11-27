<template>
  <div class="home-wrap">
    <Head></Head>
    <div class="home-main">
      <a-layout id="components-layout-demo-custom-trigger">
        <a-layout-sider :trigger="null" collapsible v-model="collapsed">
          <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']" :selectedKeys="[$route.path]">
            <a-menu-item :key="'/home/detail'">
              <router-link to="/home/detail">
                <a-icon type="home" />
                <span>首页</span>
              </router-link>
            </a-menu-item>
            <a-sub-menu key="sub1">
              <span slot="title"><a-icon type="snippets" /><span>素材管理</span></span>
              <a-menu-item :key="'/home/material'">
                <router-link to="/home/material">
                  <span>素材列表</span>
                </router-link>
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
              <span slot="title"><a-icon type="money-collect" /><span>财务管理</span></span>
              <a-menu-item :key="'/home/accountInfo'">
                <router-link to="/home/accountInfo">
                  账户信息
                </router-link>
              </a-menu-item>
              <a-menu-item :key="'/home/billing'">
                <router-link to="/home/billing">
                  计费查询
                </router-link>
              </a-menu-item>
              <a-menu-item key="5">计费规则</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub3">
              <span slot="title"><a-icon type="form" /><span>报表洞察</span></span>
              <a-menu-item key="6">实时报表</a-menu-item>
              <a-menu-item key="7">报表下载</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub4">
              <span slot="title"><a-icon type="audit" /><span>检测管理</span></span>
              <a-menu-item key="8">实时检测</a-menu-item>
              <a-menu-item key="9">周期报告</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub5">
              <span slot="title"><a-icon type="setting" /><span>系统设置</span></span>
              <a-menu-item key="10">个人资料</a-menu-item>
              <a-menu-item key="11">用户管理</a-menu-item>
              <a-menu-item key="12">角色管理</a-menu-item>
              <a-menu-item key="13">账户安全</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout>
          <a-layout-header style="background: #fff; padding: 0">
            <a-icon
              class="trigger"
              :type="collapsed ? 'menu-unfold' : 'menu-fold'"
              @click="()=> collapsed = !collapsed"
            />
          </a-layout-header>
          <a-layout-content
            :style="{ margin: '24px 24px 0', minHeight: '280px', height: '100%'}"
          >
            <router-view></router-view>
          </a-layout-content>
        </a-layout>
      </a-layout>
    </div>
  </div>
</template>

<script>
  import Head from '../../components/header'
  export default {
    name: "home",
    data() {
      return {
        collapsed: false,
      };
    },
    components:{
      Head
    }
  }
</script>

<style scoped lang="stylus">
  .home-wrap
    width 100%
    height 100%
    .home-main
      width 100%
      height 100%
      #components-layout-demo-custom-trigger
        height 100%
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

</style>
