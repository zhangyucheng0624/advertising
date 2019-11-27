<template>
  <div class="outer-layer">
    <div class="login-wrap">
      <LoginHeader />
      <div class="login-content">
        <a-form id="components-form-demo-normal-login" :form="form" class="login-form">
          <a-form-item>
            <a-input placeholder="用户名" size="large" @input="e => userName = e.target.value" v-model="userName">
              <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25);"/>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input type="password" placeholder="密码" size="large" @input="e => password = e.target.value" v-model="password">
              <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input type="verifyCode" placeholder="验证码，不区分大小写"
                     style="width: 200px;" size="large" @input="e => code = e.target.value" @keydown="enterLogin">
            </a-input>
            <img :src='verifyCode.vcImgUrl' alt="" class="img" @click="toggleCode">
          </a-form-item>
          <a-form-item>
            <a-checkbox @change="e => checked = e.target.checked" :v-model="checked">
              自动登录
            </a-checkbox>
            <a class="login-form-forgot" href="">
              忘记密码
            </a>
            <a-button type="primary" html-type="submit" class="login-form-button" size="large" @click="login" :loading="loading">
              登录
            </a-button>
            <div class="else">
              <span>其他登录方式</span>
              <i class="iconfont icon-taobao"></i>
              <i class="iconfont icon-weibo-copy"></i>
              <i class="iconfont icon-unie654"></i>
              <router-link to="/register">
                <a href="javascript:;" style="margin-left: 126px">注册账号</a>
              </router-link>
            </div>
          </a-form-item>
        </a-form>
      </div>
    </div>
    <LoginFoot />
  </div>
</template>
<script>
  import {reqverifyCode,reqLogin} from '../../api'
  import LoginFoot from '../../components/login-foot'
  import LoginHeader from '../../components/login-header'
  export default {
    name: "login",
    data() {
      return {
        captcha: '',
        verifyCode: {},
        code: '',
        userName: '',
        password: '',
        curVeriCode: '',
        checked: false,
        homeUrl:'',
        form:this.$form.createForm(this),
        loading:false
      };
    },
    created () {
      //发送ajax请求,获取验证码
      this.toggleCode();
      if (localStorage.checked){
        this.$router.push({path:'/home/detail'})
      }
    },
    methods: {
      async toggleCode() {
        const result = await reqverifyCode();
        if (result.verifyCod !== '') {
          this.verifyCode = result.verifyCode;
          this.curVeriCode = this.verifyCode.curVeriCode;
          console.log(this.verifyCode);
        }
      },
      async login() {
        const {userName, password, code, curVeriCode} = this;
        if (userName === '' && password === '') {
          this.$message.error('请输入账号或密码',2);
        }else {
          if (code.toLowerCase().toUpperCase() === curVeriCode.toLowerCase().toUpperCase()) {
            const result = await reqLogin(userName, password, code).catch((e) => {});
            localStorage.setItem('token', JSON.stringify(result.result.data.token));
            if (result.result.code === 1000) {
              this.loading = true;
              setTimeout(() => {
                const data = result.result.data;
                this.homeUrl = data.homeUrl;
                localStorage.setItem('userName', JSON.stringify(this.userName));
                localStorage.setItem('password', JSON.stringify(this.password));
                localStorage.setItem('checked', this.checked);
                localStorage.setItem('homeUrl',this.homeurl);
                if (this.homeUrl === null) {
                  this.$router.push({
                    path: '/home',
                  })
                }
              },1000);
            } else {
              this.$message.error('账号或密码错误',2)
            }
          } else {
            this.$message.error('请输入验证码或验证码错误',2);
          }
        }

      },
      enterLogin(e) {
        if (e.keyCode === 13) {
          this.login().catch((e) => {})
        }
      }
    },
    components: {
      LoginFoot,
      LoginHeader
    }
  }
</script>
<style lang="stylus" scoped>
  .outer-layer
    width 100%
    min-height 100%
    background url("https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg") center 110px no-repeat
    background-size 100%
    background-color #f0f2f5
    .login-wrap
      padding 112px 0 24px 0
      height 860px
      .login-content
        width 368px
        margin 0 auto
        .img
          width 150px
          height 40px
          margin 0 0 6px 12px
        .else
          font-size 14px
          color rgba(0,0,0,.5)
          display flex
          align-items center
          .icon-login
            margin-left 15px
          i
            font-size 24px
            margin-left 10px
            color #ccc
        .register-account
          margin-left 100px
          color #1890ff
          cursor pointer
        #components-form-demo-normal-login .login-form
          max-width 300px
        #components-form-demo-normal-login .login-form-forgot
          float right
        #components-form-demo-normal-login .login-form-button
          width 100%
          margin 30px 0 30px 0
</style>
