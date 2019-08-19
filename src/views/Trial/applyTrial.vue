<template>
  <div class="applyTrial">
    <div class="product-image-detail">
      <div class="image-show">
        <span class="icon">&#xe6a5;</span>
        <img class="image" :src="imageSrc" alt />
      </div>
      <div class="activity">
        <img class="bg" src="../../assets/image/Trial/bg-red.png" alt />
        <div class="activity-title">
          <div class="activity-left">
            <img src="../../assets/image/Trial/free.png" alt />
            <div class="price">
              <p>
                <span>0</span>享币
              </p>
              <p>¥1800</p>
            </div>
          </div>
          <div class="activity-right">
            <img class="bg" src="../../assets/image/Trial/bg-yellow.png" alt />
            <div class="activity-time">
              <p>距离结束仅剩</p>
              <p>
                <span>10</span>天
                <span>10</span>时
                <span>10</span>分
              </p>
            </div>
          </div>
        </div>
        <div class="product-name">
          <div class="name">源彬蜂业1218大促婚庆28g喜蜜蜂蜜创意回礼可代工OEM贴牌厂家直供</div>
          <div class="number">
            <p>
              限量
              <i>10</i>份
            </p>
            <p>
              <em>10000000</em>人申请
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="product-text-detail">
      <p>商品详情</p>
      <p>PRODUCT DETAILS</p>
      <img
        src="https://img.alicdn.com/imgextra/i2/1868995422/O1CN01ZCQ4121pvK1Bqv6fv_!!1868995422.jpg"
        alt
      />
    </div>
    <div class="line"></div>
    <div class="product-process">
      <div class="text">
        <span></span>
        试用流程
      </div>
      <img src="../../assets/image/Trial/apply.jpg" alt />
    </div>
    <div class="line"></div>
    <div class="product-name-list">
      <div class="text">
        <span></span>
        试用名单
      </div>
      <div class="name-list">
        <div class="list-item">
          <img
            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4259300811,497831842&fm=26&gp=0.jpg"
            alt
          />
          <span>钢铁侠</span>
        </div>
        <div class="list-item">
          <img
            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4259300811,497831842&fm=26&gp=0.jpg"
            alt
          />
          <span>钢铁侠</span>
        </div>
        <div class="list-item">
          <img
            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4259300811,497831842&fm=26&gp=0.jpg"
            alt
          />
          <span>钢铁侠</span>
        </div>
      </div>
    </div>
    <div class="detail-footer">
      <div class="home">
        <p class="icon">&#xe69d;</p>
        <p>首页</p>
      </div>
      <div class="share">
        <p class="icon">&#xe69e;</p>
        <p>分享</p>
      </div>
      <div class="apply red">申请</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Button } from 'vant';
import 'vant/lib/button/style';

@Component({
  components: {
    [Button.name]: Button,
  },
})
export default class ApplyTrial extends Vue {
  // 初始数据可以直接声明为实例的属性
  private message: string = 'Hello!';
  private imageSrc: string =
    'https://img.alicdn.com/imgextra/i2/3250799226/O1CN01gC8NvN2I1Ydst3Ie7_!!3250799226.jpg';

  // 组件方法也可以直接声明为实例的方法
  public onClick(): void {
    window.alert(this.message);
  }
}
</script>
<style lang="scss" scoped>
.applyTrial {
  overflow: hidden;
  position: relative;
  .product-image-detail {
    .image-show {
      width: 100%;
      overflow: hidden;
      position: relative;
      span {
        position: absolute;
        top: 1.875rem;
        left: 1.875rem;
        display: inline-block;
        height: 1.875rem;
        width: 1.875rem;
        border-radius: 3.75rem;
        font-family: "lx-iconfont";
        text-align: center;
        line-height: 1.875rem;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.1);
      }
      .image {
        display: block;
        width: 100%;
        height: 23.4375rem;
      }
    }
    .activity {
      width: 100%;
      overflow: hidden;
      position: relative;
      .bg {
        display: block;
        width: 100%;
        height: 3.125rem;
      }
      .activity-title {
        height: 3.125rem;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .activity-left {
          margin-left: 20px;
          display: inline-flex;
          align-items: center;
          height: 3.125rem;
          img {
            display: block;
            height: 2.1875rem;
            width: 2.1875rem;
          }
          .price {
            margin-left: 20px;
            color: #fff;
            p:first-child {
              font-size: 17px;
              font-weight: 600;
              span {
                font-size: 24px;
              }
            }
            p:nth-child(2) {
              font-size: 14px;
              text-decoration: line-through;
            }
          }
        }
        .activity-right {
          position: relative;
          img {
            display: block;
            width: 10rem;
            height: 3.125rem;
          }
          .activity-time {
            position: absolute;
            top: 0;
            right: 0;
            width: 9rem;
            text-align: center;
            line-height: 1.5625rem;
            p:first-child {
              font-size: 14px;
              color: #e5a83e;
              letter-spacing: 2px;
            }
            p:nth-child(2) {
              line-height: 20px;
              color: #e5a83e;
              span {
                display: inline-block;
                height: 20px;
                width: 20px;
                margin-right: 5px;
                color: #fff;
                font-weight: 600;
                background: #e5a83e;
              }
            }
          }
        }
      }
    }
    .product-name {
      padding: 15px 20px;

      width: 100%;
      box-sizing: border-box;
      .name {
        font-size: 16px;
        margin-bottom: 15px;
        font-style: normal;
      }
      .number {
        width: 100%;
        color: #4d4d4d;
        display: inline-flex;
        justify-content: space-between;
        i {
          font-style: normal;
          color: red;
        }
        em {
          font-style: normal;
        }
      }
    }
  }
  .line {
    width: 100%;
    height: 0.9375rem;
    border-radius: 5px;
    background: #eee;
  }
  .product-text-detail {
    padding: 20px 10px 20px 10px;
    background: #fff;
    color: #454545;
    p:first-child {
      font-size: 14px;
      letter-spacing: 1px;
    }
    p:nth-child(2) {
      font-size: 10px;
      color: #969696;
    }
    img {
      display: block;
      width: 100%;
    }
  }
  .product-process {
    padding: 20px 10px 20px 10px;
    background: #fff;
    .text {
      font-size: 18px;
      span {
        background: #ff5f5c;
        display: inline-block;
        height: 15px;
        width: 5px;
      }
    }
    img {
      display: block;
      width: 100%;
    }
  }
  .product-name-list {
    padding: 20px 10px 20px 10px;
    background: #fff;
    margin-bottom: 50px;
    .text {
      font-size: 18px;
      span {
        background: #ff5f5c;
        display: inline-block;
        height: 15px;
        width: 5px;
      }
    }
    .name-list {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 10px 20px 10px;
      .list-item {
        width: 30%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        img {
          display: block;
          height: 4.375rem;
          width: 4.375rem;
          border-radius: 4.375rem;
        }
      }
    }
  }
  .detail-footer {
    position: fixed;
    display: flex;
    bottom: 0;
    width: 100%;
    height: 50px;
    text-align: center;
    background: #fff;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
    .home {
      width: 70px;
      font-size: 12px;
      padding: 10px;
      color: #b4b6c0;
      .icon {
        font-family: "lx-iconfont";
        font-size: 20px;
      }
    }
    .share {
      width: 70px;
      padding: 10px;
      color: #b4b6c0;
      font-size: 12px;
      .icon {
        font-family: "lx-iconfont";
        font-size: 20px;
      }
    }
    .apply {
      text-align: center;
      width: inherit;
      line-height: 50px;
      color: #fff;
      font-size: 18px;
    }
    .red {
      background: #ff5f5c;
    }
    .gray {
      background: #babcc4;
    }
  }
}
</style>
