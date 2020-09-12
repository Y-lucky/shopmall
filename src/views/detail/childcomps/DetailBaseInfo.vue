<template>
  <div v-if="Object.keys(goods).length !== 0" class="detail-info">
      <div class="info-title">{{goods.title}}</div>
      <div class="info-price">
          <span class="n-price">{{goods.newPrice}}</span>
          <span class="o-price">{{goods.oldPrice}}</span>
          <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
      </div>
      <div class="info-other">
          <span class="info">{{goods.columns[0]}}</span>
          <span>{{goods.columns[1]}}</span>
          <span>{{goods.services[goods.services.length-1].name}}</span>
      </div>
      <div class="info-service">
          <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
              <img src="goods.services[index-1].icon" alt="">
              <span>{{goods.services[index-1].name}}</span>
          </span>
      </div>
  </div>
</template>

<script>
export default {
    name:"DetailBaseInfo",
    props:{
        goods:{
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style>
.detail-info{
    margin: 15px 12px;
    
}
.info-title{
    font-size: 20px;
    font-weight: 700;
    color: #3c3c3c;
}
.info-price{
    margin: 15px 0;
    
}
.n-price{
    color: #ff0000;
    font-size: 20px;
}
.o-price{
    font-size: 10px;
    padding: 0 8px;
    /* 给字体加删除线 */
    text-decoration: line-through;
}
.discount{
    color: #fff;
    font-size: 15px;
    background-color: #ff0000;
    padding: 2px 5px;
    border-radius: 10px;
    position: relative;
    top: -8px;
    /* left: 100px; */
}
.info-other{
    display: flex;
    font-size: 13px;
    justify-content: space-between;
    margin-top: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-service{
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    margin: 22px 0;
    font-weight: 700;
    color: #3c3c3c;
}
</style>