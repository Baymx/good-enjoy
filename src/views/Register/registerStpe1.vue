<template>
  <div class="register">
    <div class="login-bg">
      <img src="../../assets/image/Login/bg.png" alt />
    </div>
    <div class="login-form">
      <div class="form">
        <div class="form-item">
          <label>
            <span class="icon">&#xe6a0;</span>
          </label>
          <van-field v-model="phone" placeholder="请输入用户名" />
        </div>
        <div class="form-item">
          <label>
            <span class="icon">&#xe69f;</span>
          </label>
          <van-field v-model="password" type="password" placeholder="请输入密码" />
        </div>
        <div class="button-box">
          <div class="button">下一步</div>
        </div>
      </div>
    </div>
    <div class="tool">
      <span></span>
      <p>已有帐号,马上 <span>登录</span></p>
    </div>
  </div>
</template>
<script lang="ts">
import api from '@/api/index';
import { Field, Button } from 'vant';
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
  },
})
export default class Details extends Vue {
  private phone: string = '';
  private password: string = '';

}
</script>

<style lang="scss" scoped>
.register {
  position: relative;
  background: #fff;
  height: -webkit-fill-available;
  .login-bg {
    position: absolute;
    top: 0;
    left: 0;
    img {
      display: block;
      width: 100%;
    }
  }
  .login-form {
    position: relative;
    padding: 60px 25px 0px 25px;
    .form {
      position: relative;
      background: #fff;
      border-radius: 5px;
      padding-bottom: 5px;
      padding: 50px 20px 70px;
      box-shadow: 1px 1px 1px #eee;
      .form-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px #eeeeee solid;
        .icon {
          font-family: "lx-iconfont";
          color: #fe605d;
          font-size: 20px;
        }
      }
      .button-box {
        position: absolute;
        margin: 0 auto;
        left: 0;
        bottom: -25px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .button {
          width: 210px;
          height: 49px;
          line-height: 49px;
          border-radius: 49px;
          text-align: center;
          color: #fff;
          font-size: 18px;
          background:#FE605D;
        }
      }
    }
  }
  .tool{
    padding: 35px 25px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
      color: #fe605d;
      font-size: 14px;
    }
  }
}
</style>