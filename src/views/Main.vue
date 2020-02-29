<template>
  <div class="main">
    <div class="Goods-top" :style="{background:'url('+data.avatar+')'}">
      <div class="Goods-top-box">
        <img class="avatar" :src='data.avatar' alt />
        <div class="Merchant-info">
          <h3>
            <img class="img" src="../assets/imgs/brand@2x.png" alt />
            <span>{{data.name}}</span>
          </h3>
          <p>{{data.description}} / {{data.deliveryTime}}分钟送达</p>
          <p class="Goods-sale">
            <span>{{data.supports[0].description}}</span>
            <span class="num">{{data.sellCount}}个></span>
          </p>
        </div>
      </div>

      <div class="merchant">
        <img src="../assets/imgs/bulletin@2x.png" alt />
        <p>{{data.bulletin}}</p>
      </div>
    </div>

    <div class="Goods-link">
      <router-link to="/Goods">商品</router-link>
      <router-link to="/GoodsComment">评论</router-link>
      <router-link to="/Merchant">商品详情</router-link>
    </div>
    <router-view></router-view>
    <div class="shopcar">
      <div class="left">
        <img src="../assets/imgs/shopcar.png" alt />
        <span>￥{{price}}</span>
        <span class="free">另需配送费{{dispatchingFree}}元</span>
      </div>
      <div class="right">
        <p>{{ dispatchingPrice}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { getSellers } from "../api/apis";
export default {
  name:'Main',
  data() {
    return {
      data: {},
      dispatchingPrice: "20元起送",
      price: 0,
      dispatchingFree: 4
    };
  },
  created() {
    var obj = getSellers(); // req.get('/api/seller')
    obj.then(res => {
      this.data = res.data.data;
      this.supportsDescription = this.data.supports[0].description;
      // console.log(this.supportsDescription);
      // console.log(this.data);
    });
  }
};
</script>
<style lang="less" scoped>
@fff: #fff;
.main{
  height: 417px;;
.Goods-top {
  width: 100%;
  height: 150px;
  opacity: 0.9;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  // background-color: rgba(75, 61, 50, 0.7);
  .Goods-top-box {
    color: @fff;
    display: flex;
    justify-content: wrap;
    h1 {
      img {
        margin-top: 10px;
        vertical-align: middle;
        padding:5px;
      }
    }
    .avatar {
     width: 120px;
     height: 120px;
      padding: 10px 10px;
    }
    .Merchant-info {
      h3 {
        img{
           margin-top: 10px;
        vertical-align: middle;
        }
        display: flex;
        justify-content: space-aroundl;
        span {
          margin-top: 10px;
        }
      }
      .Goods-sale {
        display: flex;
        justify-content: space-between;
        height: 28px;
        .num {
          display: block;
          border-radius: 20%;
          background-color: #343434;
          padding: 5px;
          margin-right: 10px;
        }
      }
      p {
        margin-left: 10px;
      }
    }
  }
  .merchant {
    color: @fff;
    text-indent: 10px;
    display: flex;
    justify-content: stretch;
    img {
      margin-left: 15px;
    }
    p {
      height: 20px;
      line-height: 28px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
.Goods-link {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  a:hover {
    color: red;
    cursor: pointer;
  }
  a:active {
    color: green;
  }
}
.shopcar {
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  .left {
    width: 70%;
    background-color: #141c27;
    height: 80px;
    color: #909397;
    font-size: 22px;
    .free {
      font-size: 18px;
      color: #74767b;
    }
    span {
      margin-left: 5px;
      color: #6f737b;
    }
    img {
      width: 80px;
      height: 80px;
      vertical-align: middle;
      margin-left: 5px;
      margin-top: -10px;
    }
  }
  .right {
    width: 30%;
    background-color: #2b343b;
    height: 80px;
    padding: 23px;
    color: @fff;
    font-size: 16px;
    line-height: 29px;
  }
}
}

</style>
