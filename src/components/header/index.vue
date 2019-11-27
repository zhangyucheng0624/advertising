<template>
  <div class="header-wrap">
    <header class="header">
      <a-row>
        <a-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
          <div class="header-left">
            <img src="../../assets/车顶传媒logo.png" alt="">
            <span>{{time}}</span>
          </div>
        </a-col>
        <a-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
          <div class="middle">
            <span>{{$route.meta.title}}</span>
          </div>
        </a-col>
        <a-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
          <div class="header-right">
            <div class="user-message">
              <a-dropdown :trigger="['click']">
                <a class="ant-dropdown-link" href="#">
                  <span>
                    欢迎
                     {{amUserInfo.fullName}}
                  </span>
                  <a-icon type="down" />
                </a>
                <a-menu slot="overlay">
                  <a-menu-item key="0" @click="personage">
                    <span>个人资料</span>
                  </a-menu-item>
                  <a-menu-item key="1" @click="amendPassword">
                    <span>修改密码</span>
                  </a-menu-item>
                  <a-menu-item key="3" @click="quitLogin">
                    <span>退出登录</span>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </div>
          </div>
        </a-col>
      </a-row>
    </header>
  </div>
</template>
<script>
  import {reqPersonage} from '../../api'
  export default {
    data () {
      return {
        time:'',
        userName:'',
        password:'',
        amUserInfo:{}
      }
    },
    mounted() {
      if (localStorage.userName) {
        this.userName = JSON.parse(localStorage.userName)
      }
    },
    created(){
      this.getTime();
      this.timeInit();
      this.getAmUserInfo();
    },
    methods:{
      getTime() {
        var d = new Date;
        var s = d.getFullYear() + '-';
        s += (d.getMonth() + 1) + '-';
        s += d.getDate() + ' ';
        s += ('0' + d.getHours()).slice(-2) + ':';
        s += ('0' + d.getMinutes()).slice(-2);
        s += ' 星期' + ('日一二三四五六' [d.getDay()]);
        this.time = s;
      },
      timeInit() {
        setInterval(() => {
          this.getTime();
        }, 1000);
      },
      quitLogin () {
        localStorage.removeItem('userName');
        localStorage.removeItem('password');
        localStorage.removeItem('checked');
        this.$router.replace({path:'/login'})
      },
      amendPassword () {
        this.$router.push({path:'/government/accountsafety',});
      },
      async getAmUserInfo () {
        const amUserInfos = await reqPersonage();
        if (amUserInfos) {
          this.amUserInfo = amUserInfos.amUserInfo
        }
      },
      personage () {
        this.$router.push({path:'/government/personage',});
      }
    }
  }
</script>
<style scoped lang="stylus">
  .header-wrap
    width 100%
    height 80px
    line-height 80px
    border-bottom 1px solid #fff
    position relative
    z-index 10
    .header
      width 100%
      background-color #fff
      position fixed
      top 0
      left 0
      height 80px
      border-bottom 1px solid
      .header-left
        width 100%
        margin-left 10px
        font-size 20px
        img
          height 60px
        span
          margin-left 10px
      .middle
        font-size 35px
        span
          font-weight bold
      .header-right
        display -webkit-box
        position absolute
        top 0
        right 0
        transform translateX(-40px)
        span
          font-size 18px
</style>
