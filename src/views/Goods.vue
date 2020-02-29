<template>
  <div class="Goods-main">
    <div class="Goods-box">
      <ul class="content">
<div class="item" v-for="item in dataArr" :key="item.name">{{ item.name }}</div>
      </ul>
    </div>
    <div class="Goods-right">
     <ul class="content">
       <div v-for="item in dataArr" :key="item.id">
        <h1>{{ item.name }}</h1>
        <div class="item-child" v-for="child in item.foods" :key="child.id">
          <img :src="child.image" alt />
          <div class="child-text">
            <h3>{{child.name}}</h3>
            <p>{{child.description}}</p>
            <p>月售{{child.sellCount}}份，好评{{child.rating}}%</p>
            <p><span class="price-style">￥{{child.price}}</span> <span class="oldPrice" v-show="child.oldPrice!=''">￥{{child.oldPrice}}</span>
            </p>
          </div>
          <div>
            <Icon type="minus-circled"></Icon>
           <label>0</label>
            <Icon type="plus-circled"></Icon>
          </div>
        </div>
      </div>
     </ul>
    </div>
  </div>
</template>

<script>
import { getGoods } from "../api/apis";
import  Bscroll from 'better-scroll';
export default {
  data() {
    return {
      theme3: "light",
      data: {},
      dataArr: [],
      num:0,
    };
  },
  created() {
    var obj = getGoods();
    obj.then(res => {
      this.dataArr = res.data.data;
      console.log(this.dataArr);
    });
  },
  mounted(){
    new Bscroll(document.getElementsByClassName('Goods-box')[0]);
    new Bscroll(document.getElementsByClassName('Goods-right')[0]);
  }
};
</script>

<style lang="less" scoped>
.Goods-main {
  display: flex;
  justify-content: space-between;
  overflow: scroll;
  .Goods-box {
    width: 90px;
    height: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;

    background-color: #ccc;
    div {
      margin: 15px 15px;
     height:40px;
      border-bottom: 1px black solid;
    }
  }
  .Goods-right {
    height: 404px!important;
    display: flex;
    // align-items: center;
    h1 {
      border-left: 1px black solid;
      background-color: #ccc;
    }
    height: 500px;
    overflow: scroll;
    display: flex;
    flex: 1;
    // align-items: center;
    flex-direction: column;
    .item-child {

      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 10px;
      img {
        width: 100px;
        height: 100px;
      }
      .child-text{
        margin: 10px;
        .price-style{
          color:red;
          font-weight: bold;
        }
        .oldPrice{
          text-decoration: line-through;
        }
      }
    }
  }
}
</style>